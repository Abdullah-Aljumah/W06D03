import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
const Account = () => {
  const navigate = useNavigate();

  const changeRoutedis = (x) => {
    if (x === "log") {
      navigate(`/login`);
    } else {
      navigate(`/register`);
    }
  };
  return (
    <div className="main">
      <div onClick={() => changeRoutedis("log")}>
        <h1>LogIn</h1>
      </div>
      <div onClick={() => changeRoutedis("reg")}>
        <h1>Register</h1>
      </div>
    </div>
  );
};

export default Account;
