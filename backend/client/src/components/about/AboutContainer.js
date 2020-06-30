import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../content/Video";

class AboutContainer extends Component {
  render() {
    return (
      <Col>
        <Container fluid>
          <Row>
            <Col className="pt-3">
              <h1>About</h1>
              <p>Watch this video to learn more about how to use this app</p>
              <Video link={"https://youtu.be/yLz9ZZtLaH8"} />
            </Col>
          </Row>
        </Container>
      </Col>
    );
  }
}

export default AboutContainer;
