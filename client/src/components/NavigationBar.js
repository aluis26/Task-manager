import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import logout from "./Logout";

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light">
          <Nav className="mr-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Form inline>
              <Button
                variant="light"
                onClick={() => {
                  logout();
                }}
              >
                Log Out
              </Button>
            </Form>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
