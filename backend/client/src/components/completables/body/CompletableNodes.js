import React from "react";
import { Col, Row } from "react-bootstrap";
import CompletablesContainer from "../CompletablesContainer";

export default function CompletableNodes(props) {
  return (
    <Row className="nodes pb-3">
      <Col>
        <CompletablesContainer {...props} localCompletables={props.nodes} />
      </Col>
    </Row>
  );
}
