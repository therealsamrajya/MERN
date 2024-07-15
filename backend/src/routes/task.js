import express from "express";
import { addTask, getTasks } from "../controllers/taskController.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", verifyToken, addTask);
router.get("/all", verifyToken, getTasks);

export default router;
