import React, { Component } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";

class UserContainer extends Component {
  render() {
    return (
      <Col>
        <Container fluid>
          <Row>
            <Col className="pt-3">
              <h1>Login</h1>
              <Form>
                <Form.Group controlId="email">
                  <Form.Control
                    size="lg"
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    Please enter your @evace.org email
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Col>
    );
  }
}

export default UserContainer;
