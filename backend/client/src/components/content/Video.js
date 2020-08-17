import React from "react";
import { Row, Col } from "react-bootstrap";
import Source from "./Source";
import ReactPlayer from "react-player";

export default function Video({ link, creator, resource }) {
  return (
    <Row>
      {!!link && (
        <Col>
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={link}
              width="100%"
              height="100%"
            />
          </div>
          <Source creator={creator} resource={resource} />
        </Col>
      )}
    </Row>
  );
}
