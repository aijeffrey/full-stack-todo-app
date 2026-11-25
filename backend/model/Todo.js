const mongoose = require("mongoose");

// Schema - a structure of our document (equivalent to a table in relatiional database)

const TodoSchema = mongoose.Schema({
  // id: {type: Number, required: true},
  text: { type: String, required: true },
});

const TodoModel = mongoose.model("todos", TodoSchema);

module.exports = TodoModel;
