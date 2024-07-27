import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const port = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGODB_URI;
console.log("MongoDB URI:", process.env.MONGODB_URI);

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Mongoodb connected");
  })
  .catch((error) => {
    console.error("Mongodb connection failed", error);
  });

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
