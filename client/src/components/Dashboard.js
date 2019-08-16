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
  let [todoId, setTodoId] = useState(null);

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

  console.log(todoList);

  function MydModalWithGrid(props) {
    var trigger = false;

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

    let [editTask, setEditTask] = useState();
    let [editPriority, setEditPriority] = useState();
    let [editDueDate, setEditDueDate] = useState();
    let [editStatus, setEditStatus] = useState();
    var [x, setX] = useState(0);

    if (todoId && x === 0) {
      var selectedTodo = todoList.filter(el => el.id == todoId);
      trigger = true;
      setX(1);
      changeState();
    }

    function changeState() {
      setEditTask(selectedTodo[0].task);
      setEditPriority(selectedTodo[0].priority);
      setEditDueDate(selectedTodo[0].dueDate);
      setEditStatus(selectedTodo[0].status);
    }

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
                      placeholder={selectedTodo[0].task}
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

  return (
    <div>
      <Container>
        <h3 class="headers">My todo list:</h3>
        <Row class="table-description">
          <Col xs={6} md={6}>
            Task description:
          </Col>
          <Col xs={1} md={1}>
            Status:
          </Col>
          <Col xs={1} md={1}>
            Priority:
          </Col>
          <Col xs={2} md={2}>
            Due date:
          </Col>
          <Col xs />
          <Col xs />
        </Row>
        {todoList.map(function(todo) {
          return (
            <Row>
              <Col xs={6} md={0}>
                {todo.task}
              </Col>
              <Col xs>{todo.status}</Col>
              <Col xs>{todo.priority}</Col>
              <Col xs>{todo.dueDate}</Col>
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
          );
        })}
      </Container>

      <Container>
        <h3 class="headers">Add todo task for today:</h3>
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
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="formGridDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={dueDate}
                onChange={event => handleAddDate(event)}
              />
            </Form.Group>
            <Form.Group as={Col} md="1" class="button-submit">
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </Container>
    </div>
  );
}
//import login page
//check for token localstorage.getItem("token")
//redirect condition
