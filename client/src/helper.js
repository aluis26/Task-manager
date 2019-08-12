// import React from "react";

export default function isLoggedIn() {
  if (localStorage.getItem("accessToken")) {
    return true;
  }
  return false;
}
