import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Form className="signup-form">
          <h1>Sign Up Here!</h1>
          <br />
          <Form.Row>
            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="username" placeholder="Select a username" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="I accept the terms and conditons"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up!
          </Button>
        </Form>
      </div>
    );
  }
}
