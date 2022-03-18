import React from "react";
import "./Login2.css";
import logo from "./logo.png";
import axios from "axios";
import { urlApiLogin } from "../../services/urls";

class Login2 extends React.Component {

  state = {
    form: {
      email: "",
      password: ""
    },
    error: false,
    errorCode: "",
    errorMsg: ""
  };


  submitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  }

  submitChange = async (event) => {
    await this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
    console.log(this.state.form);
  }

  buttonHandler = (event) => {
    event.preventDefault();

    this.setState({
      error: false,
      errorCode: "",
      errorMsg: ""
    });

    axios.post(urlApiLogin, this.state.form).then(response => {
      //if response code 200, redirect to home page
      console.log(response);
      //if (response.status === 200) {
      //  this.props.history.push("/");
      //}



      if (response.status === 200) {
       window.location.href = "/home";
      }


    }).catch(error => {
      if (error.response) {
        this.setState({
          error: true,
          errorCode: error.response.data.status,
          errorMsg: error.response.data.message
        });
      } else {

        this.setState({
          error: true,
          errorMsg: error.message
        });

      }
    });
  }






  render() {
    return (
      <React.Fragment>
        <div className="wrapper fadeInDown">
          <div id="formContent">

            <div className="fadeIn first">
              <img src={logo} id="icon" alt="User Icon" />
            </div>

            <form onSubmit={this.submitHandler}>
              <input type="text" className="fadeIn second" name="email" placeholder="login" onChange={this.submitChange} />
              <input type="password" className="fadeIn third" name="password" placeholder="password" onChange={this.submitChange} />
              <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.buttonHandler} />
            </form>
            <div className="error">
              {this.state.error ? (
                <div>
                  <p>{this.state.errorMsg}</p>
                  <p>Por favor intente nuevamente. </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </ React.Fragment>
    );
  }
}

export { Login2 };