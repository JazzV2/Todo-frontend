import React from 'react';
import "./Todo.scss";

const Todo = () => {
  return (
    <div className="todo-contener">
        <header>
            <h1>Todo Application</h1>
            <nav>
                <ul>
                    <li>Todo</li>
                    <li>Account</li>
                    <li>12:03 11.10.2023</li>
                    <li>Log out</li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Todo;