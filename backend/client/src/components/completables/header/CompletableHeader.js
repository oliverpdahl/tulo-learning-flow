import React from "react";
import { Container, Row, Card, Accordion } from "react-bootstrap";
import CompletableTitle from "./CompletableTitle";
import CompletableCompleteStatus from "./CompletableCompleteStatus";
import CompletableProgressBar from "./CompletableProgressBar";

function CompletableHeader(props) {
  const { completable, hasNodes } = props;
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
          {hasNodes(completable) && <CompletableProgressBar {...props} />}
        </Row>
      </Container>
    </Accordion.Toggle>
  );
}

export default CompletableHeader;
