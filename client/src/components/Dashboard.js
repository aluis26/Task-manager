import React, { Component } from "react";
// import Login from "./Login";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsLoggedIn: false
    };
  }
  userIsLoggedIn() {
    if (localStorage.getItem("accessToken")) {
      return this.props.history.push("/dashboard");
    } else {
      this.props.history.push("/login");
    }
    //check if localstorage token exists, if yes, return true else redirect to log in
  }

  render() {
    return <div>{this.userIsLoggedIn}</div>;
  }
}
//import login page
//check for token localstorage.getItem("token")
//redirect condition
