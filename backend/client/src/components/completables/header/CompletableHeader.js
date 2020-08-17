import React, { Component } from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import CompletableTitle from "./CompletableTitle";
import CompletableCompleteStatus from "./CompletableCompleteStatus";
import CompletableProgressBar from "./CompletableProgressBar";

function CompletableHeader(props) {
  const { completable } = props;
  return (
    <Accordion.Toggle
      as={Card.Header}
      eventKey={completable.id}
      className="text-primary"
    >
      <Container fluid>
        <Row>
          <CompletableCompleteStatus {...props} />
          <CompletableTitle completable={completable} />
          {!!completable.nodes && !!completable.nodes[0] && (
            <CompletableProgressBar {...props} />
          )}
        </Row>
      </Container>
    </Accordion.Toggle>
  );
}

export default CompletableHeader;
