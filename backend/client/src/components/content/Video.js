import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Source from "./Source";
import { Player } from "video-react";

class Passage extends Component {
  render() {
    return (
      <Row>
        {!!this.props.link && (
          <Col>
            <Player playsInline src={this.props.link} />
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
