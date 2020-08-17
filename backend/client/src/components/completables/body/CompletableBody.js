import React from "react";
import { Container, Card, Accordion } from "react-bootstrap";
import CompletableNodes from "./CompletableNodes";
import CompletableContentBlocks from "./CompletableContentBlocks";
import CompletableBottomRow from "./bottomRow/CompletableBottomRow";

function CompletableBody(props) {
  const { completable, hasNodes, hasContentBlocks } = props;

  return (
    <Accordion.Collapse eventKey={completable.id}>
      <Card.Body>
        <Container fluid>
          {hasNodes(completable) && (
            <CompletableNodes nodes={completable.nodes} {...props} />
          )}
          {hasContentBlocks(completable) && (
            <CompletableContentBlocks
              contentBlocks={completable.content_blocks}
            />
          )}
          <CompletableBottomRow {...props} />
        </Container>
      </Card.Body>
    </Accordion.Collapse>
  );
}

export default CompletableBody;
