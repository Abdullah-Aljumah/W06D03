const express = require("express");
const { getTodo } = require("./../controllers/index");
const taskRouter = express.Router();

taskRouter.get("/", getTodo);

// taskRouter.put("/update/:id/:task", updateTask);
// taskRouter.delete("/delete/:id", deleteTask);

module.exports = taskRouter;
