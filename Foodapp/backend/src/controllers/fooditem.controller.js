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

const getAllFoodItems = asyncHandler(async (req, res) => {
  const foodItems = await FoodItem.find();
  res
    .status(200)
    .json(new ApiResponse(200, foodItems, "Food items fetched successfully"));
});

const updateFoodItem = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category } = req.body;

  const updatedData = { name, description, price, category };

  if (req.file) {
    updatedData.image = req.file.path;
  }

  const updatedFoodItem = await FoodItem.findByIdAndUpdate(id, updatedData, {
    new: true,
  });

  if (!updatedFoodItem) {
    throw new ApiError(404, "Food item not found");
  }
  res
    .status(200)
    .json(
      new ApiResponse(200, updatedFoodItem, "Food item updated successfully")
    );
});

const deleteFoodItem = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedFoodItem = await FoodItem.findByIdAndDelete(id);

  if (!deletedFoodItem) {
    throw new ApiError(404, "Food item not found");
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, deletedFoodItem, "Food item deleted successfully")
    );
});

const getFoodItemById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const foodItem = await FoodItem.findById(id);

  if (!foodItem) {
    throw new ApiError(404, "Food item not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, foodItem, "Food item fetched successfully"));
});

const getFoodItemByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;
  const foodItem = await FoodItem.find({ category });

  if (!foodItem) {
    throw new ApiError(404, "Food item not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, foodItem, "Food item fetched successfully"));
});

export {
  createFoodItem,
  getAllFoodItems,
  updateFoodItem,
  deleteFoodItem,
  getFoodItemById,
  getFoodItemByCategory,
};
