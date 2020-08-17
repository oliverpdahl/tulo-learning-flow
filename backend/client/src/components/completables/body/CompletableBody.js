import React from "react";
import { Container, Card, Accordion } from "react-bootstrap";
import CompletableNodes from "./CompletableNodes";
import CompletableContentBlocks from "./CompletableContentBlocks";
import CompletableBottomRow from "./bottomRow/CompletableBottomRow";

function CompletableBody(props) {
  const { completable, allCompletables, toggleCompletable } = props;

  const completableHasNodes = (c) => {
    return !!c.nodes && !!c.nodes[0];
  };

  const completableHasContentBlocks = (c) => {
    return !!c.content_blocks && !!c.content_blocks[0];
  };

  return (
    <Accordion.Collapse eventKey={completable.id}>
      <Card.Body>
        <Container fluid>
          {completableHasNodes(completable) && (
            <CompletableNodes
              nodes={completable.nodes}
              allCompletables={allCompletables}
              toggleCompletable={toggleCompletable}
            />
          )}
          {completableHasContentBlocks(completable) && (
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
