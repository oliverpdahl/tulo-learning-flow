import React, { Component } from "react";
import { Col } from "react-bootstrap";

class Source extends Component {
  render() {
    return (
      <footer class="blockquote-footer text-right pb-3">
        {this.props.creator}{" "}
        <cite title="Source Title">{this.props.resource}</cite>
      </footer>
    );
  }
}

export default Source;
