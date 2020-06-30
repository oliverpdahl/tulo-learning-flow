import React, { Component } from "react";
import { Media } from "react-bootstrap";
import ContentBlockBody from "./ContentBlockBody";

class ContentBlockContainer extends Component {
  render() {
    return <ContentBlockBody contentBlock={this.props.contentBlock} />;
  }
}

export default ContentBlockContainer;
