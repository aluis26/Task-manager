import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light">
          <Nav className="mr-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
