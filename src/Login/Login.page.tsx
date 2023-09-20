import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="contener">
      <h1>Todo Application</h1>
      <form>
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
      </form>
      <footer>
        Footer
      </footer>
    </div>
  );
};

export default Login;
