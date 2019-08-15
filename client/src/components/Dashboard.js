import React, { useState, useEffect } from "react";
import { showToDo, editToDo, addToDo, deleteToDo } from "../api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";

export default function Dashboard() {
  let [task, setTask] = useState("");

  let [priority, setPriority] = useState("");
  let [dueDate, setDueDate] = useState("");
  let [modalShow, setModalShow] = useState(false);
  let [todoList, setTodoList] = useState([]);
  let [todoId, setTodoId] = useState("");

  function handleAddTask(event) {
    setTask(event.target.value);
    console.log("Task-", task);
  }

  function handleAddPriority(event) {
    var prio = event.target.value;
    prio = parseInt(prio);
    setPriority(prio);
    console.log("Priority-", event.target.value);
  }

  function handleAddDate(event) {
    setDueDate(event.target.value);
    console.log("Date-", event.target.value);
  }

  function handleDelete(id) {
    console.log(id);
    deleteToDo(id).then(response => {
      console.log("message", response);
      showToDo().then(function(response) {
        console.log("message", response);
        setTodoList(response.data.result);
      });
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let data = { task, priority, dueDate, status: 0 };
    console.log(data);
    if (task) {
      addToDo(data).then(response => {
        console.log(response.message);
        showToDo().then(function(response) {
          console.log(response);
          setTodoList(response.data.result);
        });
      });
    }
  }

  useEffect(() => {
    showToDo().then(function(response) {
      setTodoList(response.data.result);
    });
  }, []);
  console.log(todoList);

  function MydModalWithGrid(props) {
    var selectedTodo = todoList.filter(todo => todo.id == todoId);
    let [editTask, setEditTask] = useState("");

    function handleEditTask(event) {
      setEditTask(event.target.value);
      console.log("editTask-", event.target.value);
    }

    function handleSubmitEdit(event) {
      event.preventDefault();
      let data = { task: editTask, id: todoId };
      console.log("data", data);
      if (data) {
        editToDo(data).then(response => {
          console.log(response.message);
          showToDo().then(function(response) {
            console.log(response);
            setTodoList(response.data.result);
          });
        });
      }
    }

    if (selectedTodo.length === 1) {
      return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit your task:
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row className="show-grid">
                <Col xs={6} md={4}>
                  <Form.Group as={Col} controlId="formGridTask">
                    <Form.Label>Todo task</Form.Label>
                    <Form.Control
                      value={editTask}
                      placeholder={selectedTodo[0].task}
                      onChange={event => handleEditTask(event)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={6} md={4}>
                  <code>.col-xs-6 .col-md-4</code>
                </Col>
                <Col xs={6} md={4}>
                  <code>.col-xs-6 .col-md-4</code>
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
              <Col xs>Due Date:{todo.dueDate}</Col>
              <Col xs>
                <Button
                  type="submit"
                  onClick={function() {
                    setTodoId(todo.id);
                    setModalShow(true);
                  }}
                >
                  Edit
                </Button>
                <MydModalWithGrid
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Col>
              <Col xs>
                <Button
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                >
                  Delete
                </Button>
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
                value={dueDate}
                type="date"
                onChange={event => handleAddDate(event)}
              />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
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
