const express = require("express");
const fs = require("fs");
const PORT = 5000;
const app = express();
app.use(express.json());
const taskRouter = require("./routers/routes/index");
const users = require("./routers/routes/users")
const cors = require("cors");
app.use(cors());

app.use("/todo", taskRouter);
app.use("/users", users);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
