import React from 'react';
import TodoList from './TodoList';
import Quotes from './Quotes';
import Weather from './Weather';
import Container from 'react-bootstrap/Container';
import { NavigationBarIn } from './NavigationBar';
import { Col, Row } from "react-bootstrap";

export default function Dashboard() {
  return (
    <React.Fragment>
      <NavigationBarIn />
      <Container>
        <Row>
          <Col xs={12} md={9}>
            <Row>
              <Col xs={12} md={12}>
                <TodoList />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={3}>
            <Weather />
          </Col>
        </Row>
        <Row>
          <Col sm={10} md={8}>
          </Col>
          <Col sm={2} md={4}>

            <Quotes />

          </Col>
        </Row>
      </Container>

    </React.Fragment>
  );
}



