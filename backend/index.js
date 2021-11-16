const express = require("express");
const app = express();
const fs = require("fs");
const { stringify } = require("querystring");
const PORT = 5000;

let todo = [];
app.use(express.json());

fs.readFile("./db/todo.json", (err, data) => {
  if (err) {
    return err;
  } else {
    todo = JSON.parse(data.toString());
  }
});

// Get all todo list
app.get("/todo", (req, res) => {
  res.status(200).json(todo);
});

// Update item
app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  console.log(task);
  //   console.log(id);
  let check = false;
  todo.forEach((item) => {
    if (item.id == id) {
      // console.log(id);
      // console.log(task);
      item.task = task;
      check = true;
    }
  });
  if (check) {
    fs.writeFile("./db/todo.json", JSON.stringify(todo), (err) => {
      if (err) {
        res.status(400).json("Bad input");
      } else {
        res.status(200).json(todo);
      }
    });
  } else {
    res.status(404).json("task not found");
  }
});

// delete task
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  let check = false;
  todo.forEach((item) => {
    if (item.id == id) {
      item.isDel = true;
      check = true;
    }
  });
  if (check) {
    fs.writeFile("./db/todo.json", JSON.stringify(todo), (err) => {
      if (err) {
        res.status(404).json("Task not found");
      } else {
        res.status(200).json(todo);
      }
    });
  } else {
    res.status(404).json("bad request");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
