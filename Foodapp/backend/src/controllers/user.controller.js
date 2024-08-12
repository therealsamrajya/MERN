import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    //when we save mongoose model kicks in since we dont want to validate it we use validatebeforesave

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Something went wrong while generating the tokens");
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if ([username, email, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(400, "User already exists");
  }
  const user = await User.create({
    username,
    email,
    password,
  });
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(505, "Something went wrong");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(200, createdUser, "User has been registerd successfully")
    );
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;
  if (!username && !password) {
    throw new ApiError(400, "All fields are required");
  }

  const user = await User.findOne({
    //finding user based on email or username
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiError(404, "User doesnot exits");
  }
  // User is of mongodb method
  // user is our user taken back from db
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id)
    .select("-password -refreshToken")
    .populate("cart.foodItem");

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  //cokkies cant be modified in frontend olny modified in server by httpOnly
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
          cart: loggedInUser.cart,
        },
        "User logged in successfully"
      ) //used when user wants to save refresh and access in local server
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      //set: gives obj what to update
      $set: {
        refreshToken: undefined,
      },
    },
    {
      //new: returns updated document without refreshtoken
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request");
  }

  //verifying refresh token
  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = User.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, "Invalid refresh Token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, " refresh Token expired");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newrefreshToken } =
      await generateAccessAndRefreshTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newrefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, newrefreshToken },
          "Access token refreshed successfully"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh Token");
  }
});

const resetPassword = asyncHandler(async (req, res) => {
  const { email, newPassword } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  user.password = newPassword;
  await user.save();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password reset success"));
});

const addToCart = asyncHandler(async (req, res) => {
  const { foodItemId } = req.body;

  // Ensure the user is authenticated
  if (!foodItemId) {
    throw new ApiError(400, "Food item ID is required");
  }

  const user = await User.findById(req.user._id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Check if the item is already in the cart
  if (user.cart.includes(foodItemId)) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Item already in cart"));
  }

  user.cart.push(foodItemId);
  await user.save();

  res.status(200).json(new ApiResponse(200, user.cart, "Item added to cart"));
});

const removeFromCart = asyncHandler(async (req, res) => {
  const { foodItemId } = req.body;

  if (!foodItemId) {
    throw new ApiError(400, "Food item ID is required");
  }

  const user = await User.findById(req.user._id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Ensure that each item in the cart has a valid foodItem field
  user.cart = user.cart.filter(
    (item) => item.foodItem?.toString() !== foodItemId
  );

  await user.save();

  res
    .status(200)
    .json(new ApiResponse(200, user.cart, "Item removed from cart"));
});

const getUserCart = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).populate("cart.foodItem");

  if (!user || !user.cart || user.cart.length === 0) {
    return res.status(404).json(new ApiResponse(404, [], "Cart is empty"));
  }

  res
    .status(200)
    .json(new ApiResponse(200, user.cart, "Cart items fetched successfully"));
});

const checkAuth = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { isAuthenticated: true, user: req.user },
        "User is authenticated"
      )
    );
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  resetPassword,
  getUserCart,
  addToCart,
  removeFromCart,
  checkAuth,
};
