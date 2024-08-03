import { Router } from "express";

import {
  createFoodItem,
  getAllFoodItems,
  updateFoodItem,
  deleteFoodItem,
  getFoodItemById,
  getFoodItemByCategory,
} from "../controllers/fooditem.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/create").post(verifyJWT, upload.single("image"), createFoodItem);

router.route("/").get(getAllFoodItems);

router.route("/:id").put(verifyJWT, upload.single("image"), updateFoodItem);

router.route("/:id").delete(verifyJWT, deleteFoodItem);

router.route("/:id").get(getFoodItemById);
router.route("/category/:category").get(getFoodItemByCategory);

export default router;
