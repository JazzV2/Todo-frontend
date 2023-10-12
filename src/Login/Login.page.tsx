import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Login = () => {
  return (
    <div className="contener">
      <h1>Todo Application</h1>
      <form>
        <label>Username</label>
        <input type="text" id="first"/>
        <label>Password</label>
        <input type="password" />
        <div className="buttons_field">
          <Link to="/todo"><button>Log in</button></Link>
          <button>Sign up</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
