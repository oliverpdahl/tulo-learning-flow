import React, { Component } from "react";
import { Media } from "react-bootstrap";
import ContentBlockTextBlock from "./ContentBlockTextBlock";
import Passage from "../content/Passage";
import Source from "../content/Source";

class ContentBlockBody extends Component {
  listContent = () => {
    return (
      !!this.props.contentBlock.contents &&
      this.props.contentBlock.contents.map((content) => {
        switch (content.type) {
          case "Passage":
            return <Passage />;
        }
      })
    );
  };
  render() {
    return <div>{this.listContent()}</div>;
  }
}

export default ContentBlockBody;
