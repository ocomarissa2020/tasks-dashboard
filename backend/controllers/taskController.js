import { tasks } from "../models/taskStore.js";

// Create
export const create = (req, res) => {
  const { title, description, status } = req.body;

  // Validation: title must be at least 3 characters
  if (!title || title.trim().length < 3) {
    return res
      .status(400)
      .json({ error: "Title must be at least 3 characters long." });
  }

  const newTask = {
    id: Date.now(),
    title: title.trim(),
    description: description || "",
    status: status || "todo",
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Get All
export const getAll = (req, res) => {
  res.json(tasks);
};

// Update
export const update = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  Object.assign(task, req.body);
  res.json(task);
};

// Delete
export const remove = (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return res.status(404).json({ error: "Task not found" });

  const deleted = tasks.splice(index, 1);
  res.json(deleted[0]);
};
