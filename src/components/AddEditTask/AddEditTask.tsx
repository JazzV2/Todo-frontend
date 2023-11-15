import React from "react";
import "./AddEditTask.scss";
import { AddEdit } from "../../interfaces/AddEditT";

const AddEditTask = (params: AddEdit) => {
  return (
    <div className={`task-panel${params.active}`}>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" className="title" id="title" />
        <label htmlFor="title">Description</label>
        <textarea id="description"></textarea>
        <div className="buttons">
          <button type="button">Save</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddEditTask;
