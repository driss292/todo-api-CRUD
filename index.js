require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const colors = require("colors");
mongoose.connect("mongodb://localhost/todo-list");

const app = express();
app.use(express.json());
app.use(cors());

const todosRoutes = require("./routes/todos");
app.use(todosRoutes);

app.get("/", (req, res) => {
  res.json("bienvenue sur l'API TodoList");
});

app.get("*", (req, res) => {
  res.status(404).json("Page introuvable");
});

app.listen(process.env.PORT, () => {
  console.log(colors.rainbow("Server OK"));
});
