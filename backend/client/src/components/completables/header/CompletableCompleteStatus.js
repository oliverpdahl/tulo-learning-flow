import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as fasCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";
import { Col } from "react-bootstrap";

class CompletableCompleteStatus extends Component {
  render() {
    return (
      <Col xs={0.5}>
        {this.props.isComplete(this.props.completable) ? (
          <FontAwesomeIcon icon={fasCircle} />
        ) : (
          <FontAwesomeIcon icon={farCircle} />
        )}
      </Col>
    );
  }
}

export default CompletableCompleteStatus;
