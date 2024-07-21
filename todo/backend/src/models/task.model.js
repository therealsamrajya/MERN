import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    description: String,
    date: Date,
    time: String,
    tag: String,
  },
  { timestamps: true },
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
