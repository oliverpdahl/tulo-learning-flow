import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Source from "./Source";

class Passage extends Component {
  render() {
    return (
      <Row>
        {!!this.props.img_link && (
          <Col xs={12} sm={6} md={4} className="image">
            <Image src={this.props.img_link} fluid />
            <Source
              creator={this.props.img_creator}
              resource={this.props.img_resource}
            />
          </Col>
        )}
        {!!this.props.text && (
          <Col className="text text-dark">
            <p>
              {this.props.text}
              <Source
                creator={this.props.creator}
                resource={this.props.resource}
              />
            </p>
          </Col>
        )}
      </Row>
    );
  }
}

export default Passage;
