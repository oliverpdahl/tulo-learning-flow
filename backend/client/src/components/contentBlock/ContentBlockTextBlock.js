import React, { Component } from "react";

class ContentBlockTextBlock extends Component {
  render() {
    return <p className="text-dark">{this.props.contentBlock.text}</p>;
  }
}

export default ContentBlockTextBlock;
