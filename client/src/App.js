import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { NavigationBarIn, NavigationBarOut } from "./components/NavigationBar";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/Logout";
import isLoggedIn from "./helper";

function App() {
  return (
    <div className="App backgroundColor">
      <BrowserRouter>
        {/* {isLoggedIn() && <NavigationBarIn />}
        {!isLoggedIn() && <NavigationBarOut />} */}

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/dashboard" component={Logout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
