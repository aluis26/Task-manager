import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { login } from "../api";
import "./../App.css";

// import isLoggedIn from "../helper";
import img from "./../assets/girl-todo.svg";

export default function Login(props) {
  let [userEmail, setUserEmail] = useState("");
  let [userPassword, setUserPassword] = useState("");
  let [isValidated, setIsValidated] = useState(true);
  const Swal = require("sweetalert2");

  function handleChangeEmail(event) {
    setUserEmail(event.target.value);
    console.log("userEmail-", event.target.value);
  }

  function handleChangePassword(event) {
    setUserPassword(event.target.value);
    console.log("userPassword-", event.target.value);
  }

  function validateUserEmail(userEmail) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(userEmail).toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    let data = { userEmail, userPassword };
    if (validateUserEmail(userEmail)) {
      login(data).then(result => {
        console.log(result, "result");
        if (result === undefined) {
          Swal.fire({
            // title: "Error!",
            text: "Incorrect Password or Email",
            type: "error",
            confirmButtonText: "Try Again"
          });
        } else {
          localStorage.setItem("accessToken", result.data.accessToken);
          props.history.push("/dashboard");
        }
      });
    } else {
      setIsValidated(false);
    }
  }

  return (
    <div className="login-container">
      <div className="d-inline-block">
        <img className="imgSignUp" src={img} alt="" />
      </div>
      <Form className="d-inline-block form float-right">
        <h1>Login to your account</h1>
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={userEmail}
            type="email"
            placeholder="Enter Email"
            onChange={event => handleChangeEmail(event)}
          />
          <Form.Text className="text-muted">
            {!isValidated ? (
              <Alert variant="danger">Incorrect Email format</Alert>
            ) : null}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={userPassword}
            type="password"
            placeholder="Password"
            onChange={event => handleChangePassword(event)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
