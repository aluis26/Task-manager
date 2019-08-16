import React, { useState, useEffect } from "react";
import { editToDo } from "../api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";

export default function ModalEdit(props) {
  var todo = props.todo;
  console.log(todo);
  function handleEditTask(event) {
    setEditTask(event.target.value);
    console.log("editTask-", event.target.value);
  }
  function handleEditPriorty(event) {
    var edprio = event.target.value;
    edprio = parseInt(edprio);
    setEditPriority(edprio);
    console.log("editTask-", event.target.value);
  }
  function handleEditDate(event) {
    setEditDueDate(event.target.value);
    console.log("Date-", event.target.value);
  }
  function handleEditStatus(event) {
    setEditStatus(event.target.value);
    console.log("Status-", event.target.value);
  }
  function handleSubmitEdit(event) {
    event.preventDefault();
    let data = {
      task: editTask,
      id: todo.id,
      dueDate: editDueDate,
      priority: editPriority,
      status: editStatus
    };
    console.log("data", data);
    if (data) {
      editToDo(data).then(response => {
        console.log(response.message);
        props.updateTodos();
      });
    }
  }

  let [editTask, setEditTask] = useState();
  let [editPriority, setEditPriority] = useState();
  let [editDueDate, setEditDueDate] = useState();
  let [editStatus, setEditStatus] = useState();
  let [trigger, setTrigger] = useState(false);

  if (todo !== null) {
    setTrigger(true);
  }

  useEffect(() => {
    setEditTask(todo.task);
    setEditPriority(todo.priority);
    setEditDueDate(todo.dueDate);
    setEditStatus(todo.status);
  }, [trigger]);

  if (trigger) {
    return (
      <Modal
        size="xl"
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit your task:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="show-grid">
              <Col xs={6} md={6}>
                <Form.Group as={Col} controlId="formGridTask">
                  <Form.Label>Todo task</Form.Label>
                  <Form.Control
                    value={editTask}
                    placeholder={editTask}
                    onChange={event => handleEditTask(event)}
                  />
                </Form.Group>
              </Col>
              <Col xs={2} md={2}>
                <Form.Group as={Col} controlId="formGridTask">
                  <Form.Label>Priority</Form.Label>
                  <Form.Control
                    as="select"
                    value={editPriority}
                    onChange={event => handleEditPriorty(event)}
                  >
                    <option>Choose...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={2} md={2}>
                <Form.Group as={Col} controlId="formGridTask">
                  <Form.Label>Due Date:</Form.Label>
                  <Form.Control
                    value={editDueDate}
                    type="date"
                    onChange={event => handleEditDate(event)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={2} md={2}>
                <Form.Group as={Col} controlId="formGridTask">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={editStatus}
                    onChange={event => handleEditStatus(event)}
                  >
                    <option>Choose...</option>
                    <option>1</option>
                    <option>0</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={handleSubmitEdit}>
            Submit
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return null;
  }
}
