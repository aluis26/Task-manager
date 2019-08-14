import React, { useState, useEffect } from "react";
// import { showToDo } from "../api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Dashboard() {
  var todoList = [
    { name: "this is test todo", status: "2", priority: "3", date: "23/05/19" }
  ];
  // let [todoList, setTodoList] = useState([]);

  // useEffect(() => {
  //   showToDo().then(function(todos) {
  //     setTodoList(todos);
  //   });
  // }, []);

  return (
    <div>
      <h3>DASHBOARD HERE</h3>
      {todoList.map(function(todo) {
        return (
          <Container>
            <Row>
              <Col xs>Description:{todo.name}</Col>
              <Col xs>Status:{todo.status}</Col>
              <Col xs>Priority:{todo.priority}</Col>
              <Col xs>Date:{todo.date}</Col>
              <Col xs>
                <Button>Edit</Button>
              </Col>
              <Col xs>
                <Button>Delete</Button>
              </Col>
            </Row>
          </Container>
        );
      })}

      <h3>ADD A TODO</h3>
      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridTask">
              <Form.Label>Todo task</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPriority">
              <Form.Label>Priority</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Date</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
//import login page
//check for token localstorage.getItem("token")
//redirect condition
