import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function handleLogin(data) {
  return fetch(`/api/v1/login`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
    .then(response => response.json())
    .then(result => {
      localStorage.setItem("accessToken", result.accessToken);
    });
}

export default function Login(props, { fieldName }) {
  let [userEmail, setUserEmail] = useState("");
  let [userPassword, setUserPassword] = useState("");
  let [isValidated, setIsValidated] = useState(false);

  function handleChangeuserEmail(event) {
    const value = event.target.value;
    if (value) {
      setUserEmail(value);
      console.log("userEmail-", event.target.value);
    } else {
      setUserEmail("");
    }
  }

  function handleChangeuserPassword(event) {
    setUserPassword(event.target.value);
    console.log("userPassword-", event.target.value);
  }

  function validateUserEmail(userEmail) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(userEmail).toLowerCase());
  }

  function handleSubmit(event) {
    let data = { userEmail, userPassword };
    event.preventDefault();
    handleLogin(data).then(result => {
      props.history.push("/dashboard");
    });
  }

  return (
    <div className="login-container">
      {" "}
      <Form className="form">
        <h1>Login to your account</h1>
        <br />
        <Form.Group controlId="formBasicuserEmail">
          <Form.Label>userEmail address</Form.Label>
          <Form.Control
            value={userEmail}
            type="userEmail"
            placeholder="Enter userEmail"
            onChange={event => handleChangeuserEmail(event)}
          />
          <Form.Text className="text-muted">
            {isValidated ? (
              <Alert variant="danger">Incorrect userEmail format</Alert>
            ) : null}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicuserPassword">
          <Form.Label>userPassword</Form.Label>
          <Form.Control
            value={userPassword}
            type="userPassword"
            placeholder="userPassword"
            onChange={event => handleChangeuserPassword(event)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
