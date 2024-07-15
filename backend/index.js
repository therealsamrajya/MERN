import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./src/routes/user.js";
import taskRoutes from "./src/routes/task.js";

dotenv.config();

const port = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((error) => {
    console.error("Mongodb connection failed", error);
  });

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server running on port ${port}`);
  } else {
    console.log("Error:", error);
  }
});
