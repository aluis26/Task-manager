import React, { useState } from "react";
import { addToDo } from "../api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function AddTodo(props) {
  let [task, setTask] = useState("");
  let [priority, setPriority] = useState("");
  let [dueDate, setDueDate] = useState("");

  function handleAddTask(event) {
    setTask(event.target.value);
    console.log("Task-", task);
  }
  function handleAddPriority(event) {
    var prio = event.target.value;
    setPriority(props.libraryPriority(prio));
    console.log("priority- ", priority);
  }
  function handleAddDate(event) {
    setDueDate(event.target.value);
    console.log("Date-", event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let data = { task, priority, dueDate, status: 0 };
    console.log(data);
    if (task) {
      addToDo(data).then(response => {
        console.log(response.message);
        props.updateTodos();
      });
    }
  }

  return (
    <Container>
      <h3 className="headers">Add todo task for today:</h3>
      <Form>
        <Form.Row>
          <Form.Group as={Col} md="8" controlId="formGridTask">
            <Form.Label>Todo task</Form.Label>
            <Form.Control
              value={task}
              placeholder="Type todo task"
              onChange={event => handleAddTask(event)}
            />
          </Form.Group>
          <Form.Group as={Col} md="1" controlId="formGridPriority">
            <Form.Label>Priority</Form.Label>
            <Form.Control
              as="select"
              value={priority}
              onChange={event => handleAddPriority(event)}
            >
              <option>Choose...</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="formGridDate">
            <Form.Label>Due date</Form.Label>
            <Form.Control
              type="date"
              value={dueDate}
              onChange={event => handleAddDate(event)}
            />
          </Form.Group>
          <Form.Group as={Col} md="1" className="button-submit">
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </Container>
  );
}
