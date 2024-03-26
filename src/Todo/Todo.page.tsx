import React, { useEffect, useState } from "react";
import "./Todo.scss";
import Footer from "../components/Footer/Footer";
import Task from "../components/Task/Task";
import httpModule from "../helpers/http.module";
import { token } from "../Login/Login.page";
import { ITask } from "../interfaces/Todo";
import Header from "../components/Header/Header";
import AddEditTask from "../components/AddEditTask/AddEditTask";

export let openOrClosePanel = (isImportant: boolean, isCreated: boolean, toSave: boolean, id: string, title: string, description: string) => {};
export let onDeleteButton = (id: string) => {};

const Todo = () => {
  const [task, setTask] = useState<ITask[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [todoActive, setTodoActive] = useState<string>("");
  const [isImportant, setIsImportant] = useState<boolean>(true);
  const [isCreated, setIsCreated] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    httpModule
      .get("/ToDo/Get", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => setTask(response.data))
      .catch((error) => console.log(error));
  }, []);

  onDeleteButton = (id: string) => {
    httpModule
      .delete(`/Todo/Delete${id}`, {headers: {Authorization: `Bearer ${token}`}})
      .then(response => {
        httpModule
        .get("/ToDo/Get", { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => setTask(response.data))
        .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

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

  openOrClosePanel = (isImportant: boolean, isCreated: boolean, toSave: boolean, id: string, title: string, description: string) => {
    setIsActive(prev => !prev);
    setTodoActive(prev => prev.length > 0 ? "" : "no-active-todo");
    setIsImportant(isImportant);
    setIsCreated(isCreated);
    setId(id);
    setTitle(title);
    setDescription(description);

    if (toSave){
      httpModule
      .get("/ToDo/Get", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => setTask(response.data))
      .catch((error) => console.log(error));
    }
  }

  return (
    <div>
      <AddEditTask active={addEditPanel(isActive)} isImportant={isImportant} isCreated={isCreated} title={title} description={description} id={id} />
      <div className={`todo-contener ${todoActive}`}>
        <Header />
        <div className="todo">
          <div className="section important">
            <div className="section-title">
              <h3>Important</h3>
              <span className="material-symbols-outlined" onClick={()=>openOrClosePanel(true, false, false, "", "", "")} >add</span>
            </div>
            {giveImportant(task)}
          </div>
          <div className="section optional">
            <div className="section-title">
              <h3>Optional</h3>
              <span className="material-symbols-outlined" onClick={()=>openOrClosePanel(false, false, false, "", "", "")} >add</span>
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
