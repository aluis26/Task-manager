import React, { useState } from "react";
import { addToDo } from "../api";
import { Button, Form, Col, Row, Container } from "react-bootstrap";

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
      <Row>

        <Col xs={12} sm={9} md={12}>
          <h3 className="headers">Add todo task for today:</h3>
          <Form>
            <Form.Row >
              <Form.Group as={Col} md={5} controlId="formGridTask">
                <Form.Label>Todo task</Form.Label>
                <Form.Control
                  value={task}
                  placeholder="Type todo task"

                  onChange={event => handleAddTask(event)}
                />
              </Form.Group>
              <Form.Group as={Col} md={3} controlId="formGridPriority">
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
              <Form.Group as={Col} md={3} controlId="formGridDate">
                <Form.Label>Due date</Form.Label>
                <Form.Control
                  type="date"
                  value={dueDate}
                  onChange={event => handleAddDate(event)}
                />
              </Form.Group>
              <Form.Group as={Col} md={1} className="button-submit">
                <Row md={11} style={{ height: "4.5vh", }}>

                </Row>
                <Row md={11}>
                  <Button
                    style={{ marginLeft: "2vh" }}
                    variant="info"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    <i className="fas fa-plus" />
                  </Button>
                </Row>
              </Form.Group>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container >
  );
}
