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
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={this.props.link}
                width="100%"
                height="100%"
              />
            </div>
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
