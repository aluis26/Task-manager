import React from "react";
import { Route, Redirect } from "react-router-dom";

export const isLoggedIn = () => {
  if (localStorage.getItem("accessToken")) {
    return true;
  }
  return false;
};

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
