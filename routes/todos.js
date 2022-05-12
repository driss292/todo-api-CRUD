const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");

router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (error) {
    res.send({ error: message.error });
  }
});

router.post("/todo/create", async (req, res) => {
  try {
    const newTodo = await new Todo(req.body).save();
    res.send({ message: "Todo has been added", result: newTodo });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.put("/todo/update/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findOneAndDelete(
      { _id: req.params.id },
      req.body
    );
    res.send(updatedTodo);
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.post("/todo/delete/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    res.send({ message: "Todo has been deleted", result: todo });
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = router;
