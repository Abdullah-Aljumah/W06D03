const express = require("express");
const fs = require("fs");
const PORT = 5000;
const app = express();
app.use(express.json());
const taskRouter = require("./routers/routes/index");

let todo = [];

app.use("/todo", taskRouter);

// Update item

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
