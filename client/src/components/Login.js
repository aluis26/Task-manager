import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function handleLogin(data) {
  return Promise.resolve({ accessToken: ";IUYQWP891U2ODNASLJCTOA87Y'2O" });
}

export default function Login(props) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleChangeEmail(event) {
    setEmail(event.target.value);
    console.log("email-", event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
    console.log("password-", event.target.value);
  }

  function handleSubmit(event) {
    handleLogin().then(result => {
      //   console.log(result);
      if (result) {
        props.history.push("/dashboard");
      }
    });
    // event.preventDefault();
    // console.log("login result", { email, password });
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
            We'll never share your email with anyone else.
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
          {/* <Form.Link className="text-muted">
                        Forgot Password?
                        </Form.Link> */}
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
