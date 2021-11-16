import React from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
const Home = () => {
  const URL_BASE = "http://localhost:5000";
  //   const navigate = useNavigate();
  const [todo, setTodo] = useState([]);
  const getTask = async () => {
    const items = await axios.get(`${URL_BASE}/todo`);
    console.log(items.data);
    setTodo(items.data);
  };
  useEffect(() => {
    getTask();
  }, []);

  const deleteTask = (id) => {
    setTodo(todo.filter((item) => item.id != id));
  };
  const updateTask = (e, id) => {
    console.log(e);
    console.log(id);

    todo.find((item) => {
      if (item.id == id) {
        item[id].task = e;
      }
    }); // فنكشن عشان اعدل على الليست باستخدام الاي دي
  };
  const isCompelete = (id) => {
    setTodo(todo.filter((item) => item.isCompelete != true));
  };
  const deleteAll = (item) => {
    // make todo empty
    console.log("test");
    setTodo([]);
  };

  const creatTask = (e) => {
    const newTask = {
      id: todo.length + 1,
      task: e.target.value,
      isDel: false,
      isCompelete: false,
    };
    setTodo([...todo, newTask]);
    //   e.target.task.value = "";
  };

  return (
    <div className="home">
      <input onDoubleClick={creatTask} type="text" className="input1" />
      {todo.map((item, id) => {
        {
          // حطيت شرط اذا كان از ديليت  يساوي فالز اظهره
          if (item.isDel != true) {
            return (
              <ul className="ul">
                <li
                  key={id}
                  style={{
                    display: item.Del ? "none" : "", // if isDel = true the disply will be none
                  }}
                >
                  {" "}
                  <h1>{item.task}</h1>
                  <button onClick={() => deleteTask(item.id)}>Delete</button>
                  <input
                    type="text"
                    onChange={(e) => updateTask(e.target.value, item.id)}
                    placeholder="Update"
                  />
                </li>
              </ul>
            );
          }
        }
      })}{" "}
      <button onClick={() => isCompelete(todo.id)}>Delete All Complete</button>
      <button onClick={() => deleteAll(todo)}>Delete All</button>
    </div>
  );
};

export default Home;
