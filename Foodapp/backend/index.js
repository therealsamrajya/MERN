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
app.use(cookieParser());

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((error) => {
    console.error("Mongodb connection failed", error);
  });

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", // frontend URL
  credentials: true, // allow credentials
};
app.use(cors(corsOptions));

app.use("/api/food", foodItemsRoute);

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server running on port ${port}`);
  } else {
    console.log("Error:", error);
  }
});
