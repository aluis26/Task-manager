import React, { Component } from "react";

export default class Dashboard extends Component {
  // state = {
  //   userIsLoggedIn: true
  // };

  // userIsLoggedIn() {
  //   if (localStorage.getItem()) {
  //     return this.props.history.push("/dashboard");
  //   } else {
  //     this.props.history.push("/login");
  //   }
  //   return;
  //   //check if localstorage token exists, if yes, return true else redirect to log in
  // }

  render() {
    return (
      <div>
        <h1>DASHBOARD HERE</h1>
      </div>
    );
  }
}
//import login page
//check for token localstorage.getItem("token")
//redirect condition
