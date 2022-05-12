const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");

router.get("/todos", (req, res) => {
  console.log("get todos");
});

router.post("/todos/create", (req, res) => {
  console.log("post todo");
});

router.put("/todo/edit", (req, res) => {
  console.log("edit todo");
});

router.post("/todo/delte", (req, res) => {
  console.log("delete todo");
});

module.exports = router;
