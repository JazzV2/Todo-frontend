import React, { useEffect, useState } from "react";
import "./Todo.scss";
import Footer from "../components/Footer/Footer";
import Task from "../components/Task/Task";
import httpModule from "../helpers/http.module";
import { token } from "../Login/Login.page";
import { ITask } from "../interfaces/Todo";
import Header from "../components/Header/Header";
import AddEditTask from "../components/AddEditTask/AddEditTask";

const Todo = () => {
  const [task, setTask] = useState<ITask[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [todoActive, setTodoActive] = useState<string>("");

  useEffect(() => {
    httpModule
      .get("/ToDo/Get", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => setTask(response.data))
      .catch((error) => console.log(error));
  }, []);

  const giveImportant = (task: ITask[]) => {
    let importantTask = [];
    for (let i of task) {
      if (i.isImportant) importantTask.push(i);
    }

    return importantTask.map((task) => (
      <Task
        updatedAt={task.updatedAt}
        id={task.id}
        title={task.title}
        description={task.description}
        isDone={task.isDone}
        isImportant={task.isImportant}
        key={task.id}
      />
    ));
  };

  const giveOptional = (task: ITask[]) => {
    let optionalTask = [];
    for (let i of task) {
      if (!i.isImportant) optionalTask.push(i);
    }

    return optionalTask.map((task) => (
      <Task
        updatedAt={task.updatedAt}
        id={task.id}
        title={task.title}
        description={task.description}
        isDone={task.isDone}
        isImportant={task.isImportant}
        key={task.id}
      />
    ));
  };

  const addEditPanel = (active: boolean) => {
    if (active)
      return ""
    else
      return " no-active"
  }

  const openOrClosePanel = () => {
    setIsActive(prev => !prev);
    setTodoActive(prev => prev.length > 0 ? "" : "no-active-todo");
  }

  return (
    <div>
      <AddEditTask active={addEditPanel(isActive)} />
      <div className={`todo-contener ${todoActive}`}>
        <Header />
        <div className="todo">
          <div className="section important">
            <div className="section-title">
              <h3>Important</h3>
              <span className="material-symbols-outlined" onClick={openOrClosePanel}>add</span>
            </div>
            {giveImportant(task)}
          </div>
          <div className="section optional">
            <div className="section-title">
              <h3>Optional</h3>
              <span className="material-symbols-outlined">add</span>
            </div>
            {giveOptional(task)}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Todo;
