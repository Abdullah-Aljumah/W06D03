const express = require("express");
const users = express.Router();

const { allusers, newUser, checkuser } = require("../controllers/users");

users.get("/", allusers);

users.post("/", newUser);

users.post("/loguser", checkuser);

module.exports = users;
