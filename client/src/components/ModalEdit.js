import React, { useState, useEffect } from "react";
import { editToDo } from "../api";
import { Button, Form, Col, Container, Row, Modal } from "react-bootstrap";

export default function ModalEdit(props) {
  var todo = props.todo;

  let [editTask, setEditTask] = useState();
  let [editPriority, setEditPriority] = useState();
  let [editDueDate, setEditDueDate] = useState();
  let [editStatus, setEditStatus] = useState();
  let [trigger, setTrigger] = useState(false);

  console.log("props todo:", todo);
  function handleEditTask(event) {
    setEditTask(event.target.value);
    console.log("editTask-", event.target.value);
  }
  function handleEditPriorty(event) {
    var edprio = event.target.value;
    setEditPriority(props.libraryPriority(edprio));
    console.log("priority- ", editPriority);
  }
  function handleEditDate(event) {
    setEditDueDate(event.target.value);
    console.log("Date-", event.target.value);
  }
  function handleEditStatus(event) {
    var stat = event.target.value;
    setEditStatus(props.libraryStatus(stat));
    console.log("Status-", editStatus);
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

  useEffect(() => {
    setEditTask(todo.task);
    setEditPriority(todo.priority);
    setEditDueDate(todo.dueDate.split("T")[0]);
    setEditStatus(todo.status);
    setTrigger(true);
  }, [todo]);

  console.log(
    "task",
    editTask,
    "priority",
    editPriority,
    "dueDate",
    editDueDate,
    "status",
    editStatus
  );

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
                    placeholder={editPriority}
                    onChange={event => handleEditPriorty(event)}
                  >
                    <option>Choose...</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={2} md={2}>
                <Form.Group as={Col} controlId="formGridTask">
                  <Form.Label>Due Date:</Form.Label>
                  <Form.Control
                    value={editDueDate}
                    placeholder={editDueDate}
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
                    placeholder={editStatus}
                    onChange={event => handleEditStatus(event)}
                  >
                    <option>Choose...</option>
                    <option>Done</option>
                    <option>Undone</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="info" onClick={handleSubmitEdit}>
            <i className="fas fa-check" />
          </Button>
          <Button variant="info" onClick={props.onHide}>
            <i className="fas fa-times" />
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return null;
  }
}
