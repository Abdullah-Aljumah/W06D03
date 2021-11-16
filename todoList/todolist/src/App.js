import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import Account from "./components/Account/index";

import "./App.css";
import Home from "./components/Home";
// import Register from "./components/account/register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/" element={<Account />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
