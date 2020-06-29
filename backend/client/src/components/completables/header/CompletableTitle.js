import React, { Component } from "react";
import { Col } from "react-bootstrap";

class CompletableTitle extends Component {
  render() {
    if (!!this.props.completable) {
      return <Col>{this.props.completable.title}</Col>;
    }
  }
}

export default CompletableTitle;
