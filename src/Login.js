import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //STOPS REFRESH
    //LOGIN LOGIC
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //LOGIN SUCCESSFULLY, REDIRECT TO HOME
        history.push("/");
      })
      .catch((event) => alert(event.message));
  };
  const register = (event) => {
    event.preventDefault(); //STOPS REFRESH
    //REGISTER LOGIC

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //USER CREATION SUCCESSFULL, REDIRECT TO HOME
        history.push("/");
      })
      .catch((event) => alert(event.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">
          <h5>E-Mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} className="login__signIn" type="submit">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login__signUp">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
