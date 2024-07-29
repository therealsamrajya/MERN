import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./src/routes/user.route.js";
import foodItemsRoute from "./src/routes/foodItems.route.js";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Mongoodb connected");
  })
  .catch((error) => {
    console.error("Mongodb connection failed", error);
  });

app.use("/api/food", foodItemsRoute);

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Expresss App is Running");
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server rucnning on port ${port}`);
  } else {
    console.log("Error:", error);
  }
});
