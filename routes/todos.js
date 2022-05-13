const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");

router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find().sort();
    res.send(todos);
  } catch (error) {
    res.send({ error: message.error });
  }
});

router.post("/todos/create", async (req, res) => {
  try {
    const newTodo = await new Todo(req.body).save();
    res.send({ message: "Todo has been added", result: newTodo });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.put("/todos/complete/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id, req.body);
    todo.completed = !todo.completed;
    res.send({ message: "Todo has been completed", result: todo });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.put("/todos/update/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: "Todo has been updated", result: updatedTodo });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.post("/todos/delete/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    res.send({ message: "Todo has been deleted", result: todo });
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = router;
