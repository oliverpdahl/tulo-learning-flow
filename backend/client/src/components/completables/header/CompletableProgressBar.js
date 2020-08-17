import React from "react";
import { ProgressBar, Col } from "react-bootstrap";

export default function CompletableProgressBar({ completeNodes, completable }) {
  return (
    <Col>
      <ProgressBar
        now={completeNodes(completable).length}
        min={0}
        max={completable.nodes.length}
      />
    </Col>
  );
}
