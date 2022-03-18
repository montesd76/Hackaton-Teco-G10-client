import React from "react";
import { useEffect, useState } from "react";

import "./Login2.css";
import logo from "./logo.png";
import axios from "axios";
import { urlApiLogin } from "../../services/urls";

const Login2 = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState({
    error: false,
    errorCode: "",
    errorMsg: ""
  });

  const submitChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  }

  const login = async () => {

    try {
      const response = await axios.post(urlApiLogin, form, { withCredentials: true });
      console.log(response);
      if (response.status === 200) {
        window.location.href = "/home";
      }
    } catch (error) {
      console.log(error);
      setError({
        error: true,
        errorCode: error.response.status,
        errorMsg: error.response.data.message
      });
    }
  };

  return (
    <React.Fragment>
      <div className="wrapper fadeInDown">
        <div id="formContent">

          <div className="fadeIn first">
            <img src={logo} id="icon" alt="User Icon" />
          </div>

          <form onSubmit={submitHandler}>
            <input type="text" className="fadeIn second" name="email" placeholder="login" onChange={submitChange} />
            <input type="password" className="fadeIn third" name="password" placeholder="password" onChange={submitChange} />
            <input type="submit" className="fadeIn fourth" value="Log In" onClick={login} />
          </form>
          <div className="error">
            {error.error && (
              <div>
                <p>{error.errorMsg}</p>
                <p>Por favor intente nuevamente. </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </ React.Fragment>
  );
}

export { Login2 };