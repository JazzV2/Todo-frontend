import React from 'react';
import "./App.scss";
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login.page';
import Todo from './Todo/Todo.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}

export default App;
