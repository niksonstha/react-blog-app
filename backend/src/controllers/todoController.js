import { Todo } from "../model/todoSchema.js";

export const createTask = async (req, res) => {
  try {
    const newTask = await Todo.create({
      todo: req.body.todo,
    }).populate("user");
    res.status(200).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
