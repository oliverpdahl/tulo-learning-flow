import React, { Component } from "react";
import { Media } from "react-bootstrap";

class Passage extends Component {
  render() {
    return (
      <Media>
        <Media left>
          <Media object href={this.props.link} />
        </Media>
      </Media>
    );
  }
}

export default Passage;
