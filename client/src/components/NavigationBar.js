import React from "react";
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import logout from "./Logout";

export default function NavigationBar(props) {
  // console.log(localStorage.getItem("accessToken"), "token render in navbar");
  return (
    <div>
      <Navbar bg="light">
        <Nav className="mr-auto">
          {!props.triggerNav && <Nav.Link href="/login">Login</Nav.Link>}
          {!props.triggerNav && <Nav.Link href="/signup">Signup</Nav.Link>}
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Form inline>
            {props.triggerNav && (
              <Button
                variant="light"
                onClick={() => {
                  logout();
                }}
              >
                Log Out
              </Button>
            )}
          </Form>
        </Nav>
      </Navbar>
    </div>
  );
}
