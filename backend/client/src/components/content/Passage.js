import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Source from "./Source";

function Passage({
  img_link,
  img_creator,
  img_resource,
  text,
  creator,
  resource,
}) {
  return (
    <Row>
      {!!img_link && (
        <Col xs={12} sm={6} md={4} className="image">
          <Image src={img_link} fluid />
          <Source creator={img_creator} resource={img_resource} />
        </Col>
      )}
      {!!text && (
        <Col className="text text-dark">
          <p>
            {text}
            <Source creator={creator} resource={resource} />
          </p>
        </Col>
      )}
    </Row>
  );
}

export default Passage;
