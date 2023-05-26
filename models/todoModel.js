const mongoose = require("mongoose");

const todolistSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ToDoList", todolistSchema);
