import { FoodItem } from "../models/food.model.js";
import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createFoodItem = asyncHandler(async (req, res) => {
  const { name, description, price, category } = req.body;

  if (!req.file) {
    throw new ApiError(400, "Image file is required");
  }

  const imageUrl = req.file.path;

  const existedFoodItem = await FoodItem.findOne({ name });
  if (existedFoodItem) {
    throw new ApiError(400, "Food item already exists");
  }

  const foodItem = new FoodItem({
    name,
    description,
    price,
    category,
    image: imageUrl,
  });

  await foodItem.save();

  res
    .status(201)
    .json(new ApiResponse(201, foodItem, "Food item created successfully"));
});

export { createFoodItem };
