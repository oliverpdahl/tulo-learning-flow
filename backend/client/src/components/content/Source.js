import React, { Component } from "react";
import { Col } from "react-bootstrap";

class Source extends Component {
  render() {
    return (
      <footer class="blockquote-footer">
        {this.props.creator}{" "}
        <cite title="Source Title">{this.props.resource}</cite>
      </footer>
    );
  }
}

export default Source;
