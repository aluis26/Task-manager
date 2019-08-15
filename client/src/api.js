// import React from "react";
import axios from "axios";

export function login(data) {
  return fetch(`/api/v1/login`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
    .then(res => res.json())
    .then(result => {
      localStorage.setItem("accessToken", result.accessToken);
    })
    .catch(err => console.log(err));
}

export function signup(data) {
<<<<<<< HEAD
  console.log("signup data: ", data);

=======
>>>>>>> 1e554593a634c83660953b29f918a8bb3fd8b05b
  return fetch(`/api/v1/signup`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      //"x-access-token": 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function showToDo() {
  // console.log("signup data: ", token);

  return axios(`/api/v1/todos`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("accessToken")
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // no-referrer, *client
    //  objectswith all the todos:
  });
}

export function addToDo(data) {
  // console.log("signup data: ", token);

  console.log(data, "data");
  return fetch(`/api/v1/todos`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("accessToken")
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    data: JSON.stringify(data)
    //  object with all the todos:
  }).then(res => res.json());
}

export function editToDo(data) {
  // console.log("signup data: ", token);

  return axios(`/api/v1/todos/${data.id}`, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("accessToken")
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    data: JSON.stringify(data)
  });
  // .then(res => res.json());
}

export function deleteToDo(data) {
  // console.log("signup data: ", token);

  return axios(`/api/v1/todos/${data.id}`, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("accessToken")
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // no-referrer, *client
  });
  // .then(res => res.json());
}
