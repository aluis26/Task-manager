import React, { useState, useEffect } from "react";
import { showToDo } from "../api";
import { addToo } from "../api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Dashboard() {
  var todoList = [
    {
      task: "this is test todo 1",
      status: "2",
      priority: "3",
      date: "23/05/19"
    },
    {
      task: "this is test todo 2",
      status: "3",
      priority: "1",
      date: "22/05/19"
    }
  ];

  let [task, setTask] = useState("");
  let [priority, setPriority] = useState("");
  let [date, setDate] = useState("");
  let [alertAdd, setAlertAdd] = useState(false);

  function handleAddTask(event) {
    setTask(event.target.value);
    console.log("Task-", task);
  }

  function handleAddPriority(event) {
    setPriority(event.target.value);
    console.log("Priority-", event.target.value);
  }

  function handleAddDate(event) {
    setDate(event.target.value);
    console.log("Date-", event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let data = { task, priority, date };
    if (task) {
      addToDo(data)
        .then(showToDo())
        .then(function(todos) {
          setTodoList(todos);
        })
        .then(setAlertAdd(true));
    }
  }

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
              <Col xs>Description:{todo.task}</Col>
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
              <Form.Control
                value={task}
                placeholder="Type todo task"
                onChange={event => handleAddTask(event)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPriority">
              <Form.Label>Priority</Form.Label>
              <Form.Control
                as="select"
                value={priority}
                onChange={event => handleAddPriority(event)}
              >
                <option>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                value={date}
                onChange={event => handleAddDate(event)}
              />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
      if(alertAdd)
      {
        <Alert key={idx} variant={variant}>
          This is a {"success"} alert—check it out!
        </Alert>
      }
    </div>
  );
}
//import login page
//check for token localstorage.getItem("token")
//redirect condition
