import React from "react";
import "./Task.scss";
import { ITask } from "../../interfaces/Todo";
import { getDate } from "../../functions/DateFormat";

const Task = (task: ITask) => {
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
        <span className="material-symbols-outlined">edit</span>
        <span className="material-symbols-outlined">delete_forever</span>
      </div>
    </div>
  );
};

export default Task;
