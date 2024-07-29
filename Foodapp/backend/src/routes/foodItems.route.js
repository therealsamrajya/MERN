import { Router } from "express";

import { createFoodItem } from "../controllers/fooditem.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/create").post(upload.single("image"), createFoodItem);

// router.post("/food", upload.single("image"), createFoodItem);

export default router;
