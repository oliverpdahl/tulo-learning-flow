import React, { Component } from "react";
import { ProgressBar, Col } from "react-bootstrap";

class CompletableProgressBar extends Component {
  render() {
    return (
      <Col>
        <ProgressBar
          now={this.props.completeNodes(this.props.completable).length}
          min={0}
          max={this.props.completable.nodes.length}
        />
      </Col>
    );
  }
}

export default CompletableProgressBar;
