import React, { useEffect, useState } from "react";
import "./Todo.scss";
import Footer from "../components/Footer/Footer";
import Task from "../components/Task/Task";

const Todo = () => {
  const getDate = (today: Date): string => {
    const day =
      today.getDate() + 1 < 10 ? `0${today.getDate()}` : today.getDate();
    const month =
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1;
    const year = today.getFullYear();
    const hour =
      today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
    const minute =
      today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
    const second =
      today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();

    return `${day}.${month}.${year} ${hour}:${minute}:${second}`;
  };

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setCurrentDate(new Date()), 1000);
  }, []);

  return (
    <div className="todo-contener">
      <header>
        <h1>Todo Application</h1>
        <nav>
          <ul>
            <li>
              <h3>Todo</h3>
              <div className="line"></div>
            </li>
            <li>
              <h3>Account</h3>
              <div className="line"></div>
            </li>
          </ul>
          <ul>
            <li style={{cursor: "auto"}}>
              <h3>{getDate(currentDate)}</h3>
            </li>
            <li>
              <button><h3>Log out</h3></button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="todo">
        <div className="section important">
          <h3>Important</h3>
          <Task />
        </div>
        <div className="section optional">
          <h3>Optional</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Todo;
