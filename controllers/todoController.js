const ToDoModel = require("../models/todoModel");

const getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

const saveToDo = async (req, res) => {
  const text = req.body;

  ToDoModel.create(text).then((data) => {
    res.send(data);
    console.log("ToDo Added Succesfully");
    console.log(data);
  });
};

const updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  const todo = await ToDoModel.findOne({ _id });
  todo.text = text;
  todo.save();
  res.send("ToDo Updated Succesfully");
  console.log(todo);
};

//another way
// const updateToDo = async (req, res) => {
//   const { _id, text } = req.body;
//   ToDoModel.findByIdAndUpdate(_id, { text })
//     .then(() => {
//       res.send("Updated ToDoList");
//     })
//     .catch((err) => console.log(err));
// };

const deleteToDo = async (req, res) => {
  const _id = req.body._id;
  ToDoModel.findByIdAndDelete(_id)
    .then((data) => {
      res.send("Deleted ToDoList");
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
};
