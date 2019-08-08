import React, { Component } from "react";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  userIsLoggedIn() {
    //check if localstorage token exists, if yes, return true else redirect to log in
    return true;
  }
  render() {
    return <div>Dashboard</div>;
  }
}
