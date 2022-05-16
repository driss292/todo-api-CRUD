const mongoose = require("mongoose");

const Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
  },
  // _id: {
  //   type: String,
  // },
  completed: {
    type: Boolean,
    default: false,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  // timestamps: {
  //   type: Number,
  // },
});

module.exports = Todo;
