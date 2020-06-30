import React, { Component } from "react";
import { Media, Row, Col } from "react-bootstrap";
import ContentBlockTextBlock from "./ContentBlockTextBlock";
import Passage from "../content/Passage";
import Source from "../content/Source";
import { Player } from "video-react";

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
              <Row>
                <Col>
                  <Player playsInline src={content.link} />
                  <Source
                    creator={content.creator}
                    resource={content.resource}
                  />
                </Col>
              </Row>
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
