import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Source from "./Source";

class Passage extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} lg={4} className="image">
          <Image src={this.props.img_link} fluid />
          <Source
            creator={this.props.img_creator}
            resource={this.props.img_resource}
          />
        </Col>
        <Col className="text">
          <p>{this.props.text}</p>
          <Source creator={this.props.creator} resource={this.props.resource} />
        </Col>
      </Row>
    );
  }
}

export default Passage;
