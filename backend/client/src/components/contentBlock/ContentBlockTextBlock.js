import React, { Component } from "react";
import ContentBlockSource from "./ContentBlockSource";

class ContentBlockTextBlock extends Component {
  render() {
    return (
      <div>
        <p className="text-dark">{this.props.contentBlock.text}</p>
        <ContentBlockSource create={"Bob Ross"} resource={"BRRos"} />
      </div>
    );
  }
}

export default ContentBlockTextBlock;
