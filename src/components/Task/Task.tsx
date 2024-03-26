import React from "react";
import "./Task.scss";
import { ITask } from "../../interfaces/Todo";
import { getDate } from "../../functions/DateFormat";
import { onDeleteButton, openOrClosePanel } from "../../Todo/Todo.page";

const Task = (task: ITask) => {

  const onEditButton = () => {
    openOrClosePanel(task.isImportant, true, false, task.id, task.title, task.description)
  };

  return (
    <div className="task">
      <div className="task-left">
        <h3>
          {task.title} <sup>{getDate(new Date(task.updatedAt))}</sup>
        </h3>
        <p>
          {task.description}
        </p>
      </div>
      <div className="task-right">
        <span className="material-symbols-outlined">done</span>
        <span className="material-symbols-outlined" onClick={onEditButton}>edit</span>
        <span className="material-symbols-outlined" onClick={()=>onDeleteButton(task.id)}>delete_forever</span>
      </div>
    </div>
  );
};

export default Task;
