import React, { Component } from "react";
import { Media, Image } from "react-bootstrap";
import Source from "./Source";

class Passage extends Component {
  render() {
    return (
      <Media>
        <Image src={this.props.img_link} fluid />
        <Source
          creator={this.props.img_creator}
          resource={this.props.img_resource}
        />
        <Media.Body>
          <p>{this.props.text}</p>
          <Source creator={this.props.creator} resource={this.props.resource} />
        </Media.Body>
      </Media>
    );
  }
}

export default Passage;
