import Task from "../models/Task.js";

// GET /api/tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/tasks
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({ user: req.user._id, title, description });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT /api/tasks/:id
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.user.toString() !== req.user._id.toString()) return res.status(404).json({ message: "Not found" });

    task.title = req.body.title ?? task.title;
    task.description = req.body.description ?? task.description;
    if (typeof req.body.isCompleted === "boolean") task.isCompleted = req.body.isCompleted;

    const updated = await task.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE /api/tasks/:id
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.user.toString() !== req.user._id.toString()) return res.status(404).json({ message: "Not found" });
    await task.deleteOne();
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
