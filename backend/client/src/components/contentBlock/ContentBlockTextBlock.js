import React, { Component } from "react";
import Source from "../content/Source";

class ContentBlockTextBlock extends Component {
  render() {
    return (
      <div>
        <p className="text-dark">{this.props.contentBlock.text}</p>
        <Source create={"Bob Ross"} resource={"BRRos"} />
      </div>
    );
  }
}

export default ContentBlockTextBlock;
