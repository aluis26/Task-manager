import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import login from "../api";
import isLoggedIn from "./PrivateRoute";

export default function Login(props, { fieldName }) {
  let [userEmail, setUserEmail] = useState("");
  let [userPassword, setUserPassword] = useState("");
  let [isValidated, setIsValidated] = useState(false);

  function handleLogin(data) {
    login(data)
      .then(response => response.json())
      .then(result => {
        localStorage.setItem("accessToken", result.accessToken);
      });
  }

  function handleChangeEmail(event) {
    const value = event.target.value;
    if (value) {
      setUserEmail(value);
      console.log("userEmail-", event.target.value);
    } else {
      setUserEmail("");
    }
  }
  //if value,
  //else set useremail, setisvalidated...

  function handleChangePassword(event) {
    setUserPassword(event.target.value);
    console.log("userPassword-", event.target.value);
  }

  function validateUserEmail(userEmail) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(userEmail).toLowerCase());
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   let data = { userEmail, userPassword };
  //   handleLogin(data, () => {
  //     if (validateUserEmail(userEmail)) {
  //       return isLoggedIn();
  //     }
  //   });
  // }
  function handleSubmit(event) {
    event.preventDefault();
    let data = { userEmail, userPassword };
    handleLogin(data);
    if (validateUserEmail(userEmail)) {
      return isLoggedIn();
    }
  }

  return (
    <div className="login-container">
      {" "}
      <Form className="form">
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
            {isValidated ? (
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
