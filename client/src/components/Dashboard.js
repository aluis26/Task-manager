import React, { useState, useEffect } from "react";
// import { showToDo } from "../api";
import Button from "react-bootstrap/Button";

export default function Dashboard() {
  var todoList = [
    {
      name: "this is test todo 1",
      status: "2",
      priority: "3",
      date: "23/05/19"
    },
    {
      name: "this is test todo 2",
      status: "3",
      priority: "1",
      date: "22/05/19"
    }
  ];
  // let [todoList, setTodoList] = useState([]);

  // useEffect(() => {
  //   showToDo().then(function(todos) {
  //     setTodoList(todos);
  //   });
  // }, []);

  return (
    <div>
      <h1>DASHBOARD HERE</h1>
      {todoList.map(function(todo) {
        return (
          <div>
            <div> Description:{todo.name}</div>
            <div> Status:{todo.status} </div>
            <div> Priority:{todo.priority} </div>
            <div> Date:{todo.date} </div>
            <div>
              <Button>Edit</Button>
            </div>
            <div>
              <Button>Delete</Button>
            </div>
          </div>
        );
      })}

      <h1>ADD A TODO</h1>
      <form>
        <input />
      </form>
    </div>
  );
}
//import login page
//check for token localstorage.getItem("token")
//redirect condition
