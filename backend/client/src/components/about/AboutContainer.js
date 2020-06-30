import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class AboutContainer extends Component {
  render() {
    return (
      <Col>
        <Container fluid>
          <Row>
            <Col>
              <h1>About</h1>
            </Col>
          </Row>
        </Container>
      </Col>
    );
  }
}

export default AboutContainer;
