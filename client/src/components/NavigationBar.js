import React from "react";
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import logout from "./Logout";
import isLoggedIn from "../helper";

// export function NavigationBarOut() {
//   return (
//     <div>
//       <Navbar bg="light">
//         <Nav className="mr-auto">
//           <Nav.Link href="/login">Login</Nav.Link>
//           <Nav.Link href="/signup">Signup</Nav.Link>
//         </Nav>
//       </Navbar>
//     </div>
//   );
// }

export function NavigationBarIn() {
  return (
    <div>
      <Navbar bg="light">
        <Nav className="mr-auto">
          <Form inline>
            <Button
              variant="light"
              href="/dashboard"
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
