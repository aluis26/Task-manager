import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Dashboard from "./Dashboard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function handleLogin(data) {
  return Promise.resolve({ accessToken: ";IUYQWP891U2ODNASLJCTOA87Y'2O" });
}

export default function Login(props, { fieldName }) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isValidated, setIsValidated] = useState(false);

  function handleChangeEmail(event) {
    const value = event.target.value;
    if (value) {
      setEmail(value);
      console.log("email-", event.target.value);
    } else {
      setEmail("");
    }
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
    console.log("password-", event.target.value);
  }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function handleSubmit(event) {
    handleLogin().then(result => {
      if (validateEmail(email)) {
        let res = props.history.push("/dashboard");
        return res;
      } else {
        setIsValidated(true);
      }
    });
    event.preventDefault();
    console.log("login result", { email, password });
  }
  return (
    <div className="login-container">
      <Form className="form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            type="email"
            placeholder="Enter email"
            onChange={event => handleChangeEmail(event)}
          />
          <Form.Text className="text-muted">
            {isValidated ? (
              <Alert variant="danger">Incorrect email format</Alert>
            ) : null}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
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
