import Task from "../models/task.model.js";

// Add task
export const addTask = async (req, res) => {
  const { task, description, date, time, tag } = req.body;
  const userId = req.user.id;

  try {
    const newTask = new Task({
      userId,
      task,
      description,
      date,
      time,
      tag,
    });

    await newTask.save();
    res.json(newTask);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// Get all tasks
export const getTasks = async (req, res) => {
  const userId = req.user.id;

  try {
    const tasks = await Task.find({ userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).send("server error");
  }
};
