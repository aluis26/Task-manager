import React from "react";
import TodoList from "./TodoList";
import Quotes from "./Quotes";

export default function Dashboard() {
  return (
    <React.Fragment>
      <TodoList />
      <Quotes />
    </React.Fragment>
  );
}
