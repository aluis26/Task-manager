import React, { useState, useEffect } from "react";
import { showToDo, editToDo, addToDo, deleteToDo } from "../api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import React from "react";
import TodoList from "./TodoList";

export default function Dashboard() {
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
    <React.Fragment>
      <TodoList />
    </React.Fragment>
  );
}
