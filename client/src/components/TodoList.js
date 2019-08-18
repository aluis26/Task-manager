import React, { useState, useEffect } from "react";
import { showToDo, deleteToDo } from "../api";
import { Button, Col, Container, Row } from "react-bootstrap";
import ModalEdit from "./ModalEdit";
import AddTodo from "./AddTodo";

export default function TodoList() {
  let [modalShow, setModalShow] = useState(false);
  let [todoList, setTodoList] = useState([]);
  let [selectedTodo, setSelectedTodo] = useState(null);

  function libraryPriority(prio) {
    let library = [["High", 1], ["Medium", 2], ["Low", 3]];
    let x;

    //   if (prio == x) {
    //     return undefined;
    //   }
    //   if (typeof prio == "number") {
    //     x = library.filter(e => e[1] === prio);
    //     return x[0][0];
    //   } else {
    //     x = library.filter(e => e[0] === prio);
    //     return x[0][1];
    //   }
  }

  function libraryStatus(stat) {
    let library = [["Undone", 0], ["Done", 1]];
    let x;

    // if (stat == x) {
    //   return undefined;
    // }
    // if (typeof stat === "number") {
    //   x = library.filter(e => e[1] === stat);
    //   return x[0][0];
    // } else {
    //   x = library.filter(e => e[0] === stat);
    //   return x[0][1];
    // }
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

  function fetchTodos() {
    showToDo().then(function(response) {
      setTodoList(response.data.result);
    });
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  function updateTodos() {
    fetchTodos();
  }
  return (
    <React.Fragment>
      <AddTodo
        updateTodos={updateTodos}
        libraryStatus={libraryStatus}
        libraryPriority={libraryPriority}
      />
      <Container
        className=" todo-container float-left opac"
        style={{ width: "60vw" }}
      >
        <h3 className="headers">My todo list:</h3>
        <Row className="table-description">
          <Col xs={6} md={5}>
            Task description:
          </Col>
          <Col xs={1} md={1}>
            Status:
          </Col>
          <Col xs={1} md={1}>
            Priority:
          </Col>
          <Col xs={2} md={5}>
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
                <hr />
              </Col>

              <Col xs>{libraryStatus(todo.status)}</Col>
              <Col xs>{libraryPriority(todo.priority)}</Col>
              <Col xs>{todo.dueDate ? todo.dueDate.split("T")[0] : null}</Col>
              <Col xs>
                <Button
                  variant="info"
                  type="submit"
                  onClick={function() {
                    setSelectedTodo(todo);
                    setModalShow(true);
                  }}
                >
                  <i className="far fa-edit" />
                </Button>

                {selectedTodo && (
                  <ModalEdit
                    show={modalShow}
                    todo={selectedTodo}
                    onHide={() => setModalShow(false)}
                    updateTodos={updateTodos}
                    libraryStatus={libraryStatus}
                    libraryPriority={libraryPriority}
                  />
                )}
              </Col>
              <Col xs>
                <Button
                  variant="info"
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                >
                  <i class="far fa-trash-alt" />
                </Button>
              </Col>
            </Row>
          );
        })}
      </Container>
    </React.Fragment>
  );
}
