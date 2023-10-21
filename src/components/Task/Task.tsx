import React from "react";
import "./Task.scss";

const Task = () => {
  return (
    <div className="task">
      <div className="task-left">
        <h3>Something todo</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          dicta, possimus similique rerum odit maxime magni aliquam vitae quos
          beatae, dolores nisi, nam eius atque.
        </p>
      </div>
      <div className="task-right">
        <h3>21.10.2023</h3>
        <h3>10:30</h3>
        <div className="task-icons">
          <span className="material-symbols-outlined">done</span>
          <span className="material-symbols-outlined">edit</span>
          <span className="material-symbols-outlined">delete_forever</span>
        </div>
      </div>
    </div>
  );
};

export default Task;
