import React, { Component } from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import CompletableTitle from "./CompletableTitle";
import CompletableCompleteStatus from "./CompletableCompleteStatus";
import CompletableProgressBar from "./CompletableProgressBar";

class CompletableHeader extends Component {
  render() {
    return (
      <Accordion.Toggle
        as={Card.Header}
        eventKey={this.props.completable.id}
        className="text-primary"
      >
        <Container fluid>
          <Row>
            <CompletableCompleteStatus
              completable={this.props.completable}
              allCompletables={this.props.allCompletables}
              isComplete={this.props.isComplete}
            />
            <CompletableTitle completable={this.props.completable} />
            <CompletableProgressBar />
          </Row>
        </Container>
      </Accordion.Toggle>
    );
  }
}

export default CompletableHeader;
