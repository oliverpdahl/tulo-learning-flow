import React from "react";
import { Col, Row } from "react-bootstrap";
import CompletableCompleteButton from "./CompletableCompleteButton";

export default function CompletableBottomRow(props) {
  return (
    <div>
      <Row className="bottom-row">
        <Col xs={12} sm={8} md={9}></Col>
        <Col>
          <CompletableCompleteButton {...props} />
        </Col>
      </Row>
    </div>
  );
}
