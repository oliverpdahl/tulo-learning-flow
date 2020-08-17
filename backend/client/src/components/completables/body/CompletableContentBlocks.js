import React from "react";
import { Col, Row } from "react-bootstrap";
import ContentBlockContainer from "../../contentBlock/ContentBlockContainer";

export default function CompletableContentBlocks({ contentBlocks }) {
  return (
    <Row className="content-blocks-row">
      <Col>
        {contentBlocks.map((contentBlock) => (
          <ContentBlockContainer
            key={contentBlock.id}
            contentBlock={contentBlock}
          />
        ))}
      </Col>
    </Row>
  );
}
