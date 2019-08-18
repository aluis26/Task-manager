import React from "react";
import TodoList from "./TodoList";
import Quotes from "./Quotes";
import Weather from "./Weather";
import Container from "react-bootstrap/Container";
import { NavigationBarIn } from "./NavigationBar";

export default function Dashboard() {
  return (
    <React.Fragment>
      <NavigationBarIn />
      <Container>
        <Weather /> <br /> <br />
        <TodoList />
        <Quotes />
      </Container>
    </React.Fragment>
  );
}
