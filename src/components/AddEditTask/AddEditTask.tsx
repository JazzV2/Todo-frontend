import React, { useEffect, useState } from "react";
import "./AddEditTask.scss";
import { AddEdit, CreateTask, EditTask, TextTask } from "../../interfaces/AddEditT";
import { openOrClosePanel } from "../../Todo/Todo.page";
import httpModule from "../../helpers/http.module";
import { token } from "../../Login/Login.page";

const AddEditTask = (params: AddEdit) => {
  const [text, setText] = useState<TextTask>({title: params.title, description: params.description});
  useEffect(()=>{
    setText({title: params.title, description: params.description});
  }, [params.title, params.description]);

  const onButton = (toSave: boolean) =>{
    setText({title: "", description: ""});
    openOrClosePanel(params.isImportant, params.isCreated, toSave, "", "", "");
  };

  const onSaveButton = () =>{
    if (!params.isCreated){
      let create: CreateTask = {title: text.title, description: text.description, isImportant: params.isImportant}
      httpModule.post("/ToDo/Create", create, { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        onButton(true);
      })
      .catch(error => console.log(error));
    }else{
      let edit: EditTask = {newTitle: text.title, newDescription: text.description}
      httpModule.patch(`/ToDo/Edit${params.id}`, edit, {headers: {Authorization: `Bearer ${token}`}})
      .then(response => {
        onButton(true)
      })
      .catch(error => console.log(error))
    }
  };

  return (
    <div className={`task-panel${params.active}`}>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" className="title" id="title" value={text.title} onChange={(e)=>setText({...text, title: e.target.value})} />
        <label htmlFor="title">Description</label>
        <textarea id="description" value={text.description} onChange={(e)=>setText({...text, description: e.target.value})} ></textarea>
        <div className="buttons">
          <button type="button" onClick={onSaveButton} >Save</button>
          <button type="button" onClick={()=>onButton(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddEditTask;
