import React, { Component } from "react";
import { Media, Row, Col } from "react-bootstrap";
import ContentBlockTextBlock from "./ContentBlockTextBlock";
import Passage from "../content/Passage";
import Source from "../content/Source";
import { Player } from "video-react";
import Video from "../content/Video";

class ContentBlockBody extends Component {
  listContent = () => {
    return (
      !!this.props.contentBlock.contents &&
      this.props.contentBlock.contents.map((content) => {
        switch (content.type) {
          case "Passage":
            return (
              <Passage
                img_link={content.img_link}
                img_creator={content.img_creator}
                img_resource={content.img_resource}
                text={content.text}
                creator={content.creator}
                resource={content.resource}
              />
            );
          case "Video":
            return (
              <Video
                creator={content.creator}
                resource={content.resource}
                link={content.link}
              />
            );
        }
      })
    );
  };
  render() {
    return <div>{this.listContent()}</div>;
  }
}

export default ContentBlockBody;
