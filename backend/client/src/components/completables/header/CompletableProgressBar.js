import React, { Component } from "react";
import { ProgressBar, Col } from "react-bootstrap";

class CompletableProgressBar extends Component {
  render() {
    console.log(this.props.completeNodes(this.props.completable));
    return (
      <Col>
        <ProgressBar now={69} />
      </Col>
    );
  }
}

export default CompletableProgressBar;
