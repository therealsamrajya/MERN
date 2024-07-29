import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import dotenv from "dotenv";

dotenv.config();

export const protect = async (req, res, next) => {
  let token;

  // Check for token in cookies
  if (req.cookies.accessToken) {
    token = req.cookies.accessToken;
  } else {
    return next(new ApiError(401, "Not authorized, no token"));
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Find the user and attach it to the request object
    req.user = await User.findById(decoded.id).select(
      "-password -refreshToken"
    );

    if (!req.user) {
      return next(new ApiError(401, "No user found with this ID"));
    }

    next();
  } catch (error) {
    return next(new ApiError(401, "Not authorized, token failed"));
  }
};
