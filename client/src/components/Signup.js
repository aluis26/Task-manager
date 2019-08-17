import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import { signup } from "../api";

export default function Signup(props) {
  let [userName, setUserName] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [userPassword, setUserPassword] = useState("");
  let [userConfirmPassword, setUserConfirmPassword] = useState("");
  let [isCorrect, setIsCorrect] = useState(true);

  function handleUserName(event) {
    setUserName(event.target.value);
  }

  function handleUserEmail(event) {
    setUserEmail(event.target.value);
  }
  function validateUserEmail(userEmail) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(userEmail).toLowerCase());
  }

  function handleUserPassword(event) {
    setUserPassword(event.target.value);
  }

  function handleUserConfirmPassword(event) {
    setUserConfirmPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let data = { userEmail, userName, userPassword };
    if (
      userPassword === userConfirmPassword &&
      userPassword.length > 6 &&
      validateUserEmail(userEmail) &&
      userName
    ) {
      signup(data).then(() => {
        props.history.push("/login");
      });
      //to do - multiple error msgs
    } else {
      console.log("error");
    }
  }

  return (
    <div>
      <Form className="signup-form">
        <h1>Sign Up Here!</h1>
        <br />
        <Form.Row>
          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              value={userName}
              type="username"
              placeholder="Select a username"
              onChange={event => handleUserName(event)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={userEmail}
              type="email"
              placeholder="Enter email"
              onChange={event => handleUserEmail(event)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={userPassword}
              type="password"
              placeholder="Password"
              onChange={event => handleUserPassword(event)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              value={userConfirmPassword}
              type="password"
              placeholder="Confirm password"
              onChange={event => handleUserConfirmPassword(event)}
            />
            {!isCorrect ? (
              <Alert variant="danger">Your passwords do not match</Alert>
            ) : null}
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Sign Up!
        </Button>
      </Form>
    </div>
  );
}
