import React, { Component } from "react";
import { Media } from "react-bootstrap";
import ContentBlockBody from "./ContentBlockBody";

class ContentBlockContainer extends Component {
  render() {
    return (
      <Media>
        <ContentBlockBody contentBlock={this.props.contentBlock} />
      </Media>
    );
  }
}

export default ContentBlockContainer;
