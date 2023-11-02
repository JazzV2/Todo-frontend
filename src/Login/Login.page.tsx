import React, { useState } from "react";
import "./Login.scss";
import { Link, redirect, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { ILogin } from "../interfaces/User";
import httpModule from "../helpers/http.module";

export let token: string;

const Login = () => {
  const[login, setLogin] = useState<ILogin>({username: "", password: ""});
  const redirect = useNavigate();
  
  const handleClickLogin = () => {
    httpModule
      .post("/User/Login", login)
      .then(response => {
        token = response.data;
        redirect("/todo");
      })
      .catch(error => alert(error.response.data));
  }

  return (
    <div className="contener">
      <h1>Todo Application</h1>
      <form>
        <label>Username</label>
        <input type="text" id="first" value={login.username} onChange={(e) => setLogin({...login, username: e.target.value})} />
        <label>Password</label>
        <input type="password" value={login.password} onChange={(e) => setLogin({...login, password: e.target.value})} />
        <div className="buttons_field">
          <button type="button" onClick={handleClickLogin}>Log in</button>
          <button type="button">Sign up</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;