const fs = require("fs");
const express = require("express");
// fs.readFile("./db/todo.json", (err, data) => {
//   if (err) {
//     return err;
//   } else {
//     todo = JSON.parse(data.toString());
//   }
// });
let todo = [
  {
    id: 0,
    task: "read",
    isDel: false,
    isComplete: true,
  },
  {
    id: 1,
    task: "sleep",
    isDel: true,
    isComplete: false,
  },
  {
    id: 2,
    task: "gaming",
    isDel: false,
    isComplete: true,
  },
];
const getTodo = (req, res) => {
  res.status(200).json(todo);
};

// const updateTask = (req, res) => {
//   const { id, task } = req.params;
//   console.log(task);
//   //   console.log(id);
//   let check = false;
//   todo.forEach((item) => {
//     if (item.id == id) {
//       // console.log(task);
//       item.task = task;
//       check = true;
//     }
//   });
//   if (check) {
//     fs.writeFile("./db/todo.json", JSON.stringify(todo), (err) => {
//       if (err) {
//         res.status(400).json("Bad input");
//       } else {
//         res.status(200).json(todo);
//       }
//     });
//   } else {
//     res.status(404).json("task not found");
//   }
// };

// const deleteTask = (req, res) => {
//   const { id } = req.params;
//   console.log("first");

//   let check = false;
//   todo.forEach((item) => {
//     if (item.id == id) {
//       item.isDel = true;
//       check = true;
//     }
//   });
//   if (check) {
//     console.log("third");

//     fs.writeFile("./db/todo.json", JSON.stringify(todo), (err) => {
//       if (err) {
//         res.status(404).json("Task not found");
//       } else {
//         res.status(200).json(todo);
//       }
//     });
//   } else {
//     res.status(404).json("bad request");
//   }
// };
module.exports = { getTodo };
