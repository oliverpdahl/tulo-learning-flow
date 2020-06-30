import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class UserContainer extends Component {
  render() {
    return (
      <Col>
        <Container fluid>
          <Row>
            <Col>
              <h1>Login</h1>
            </Col>
          </Row>
        </Container>
      </Col>
    );
  }
}

export default UserContainer;
