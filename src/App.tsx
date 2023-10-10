import React from 'react';
import "./App.scss";
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
