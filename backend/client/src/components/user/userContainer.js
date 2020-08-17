import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

export default function UserContainer() {
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
              <Form.Group controlId="password">
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Log In
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
