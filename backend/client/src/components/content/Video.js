import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Source from "./Source";
import ReactPlayer from "react-player";

class Passage extends Component {
  render() {
    return (
      <Row>
        {!!this.props.link && (
          <Col>
            <ReactPlayer
              playsinline
              width="100%"
              height="auto"
              url={this.props.link}
            />
            <Source
              creator={this.props.creator}
              resource={this.props.resource}
            />
          </Col>
        )}
      </Row>
    );
  }
}

export default Passage;
