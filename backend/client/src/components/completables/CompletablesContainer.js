import React, { Component } from "react";
import { Accordion, Col, Button } from "react-bootstrap";
import CompletableCard from "./CompletableCard";
import { connect } from "react-redux";
import { toggleCompletable } from "../../actions/toggleCompletable";

function CompletablesContainer({
  localCompletables,
  allCompletables,
  toggleCompletable,
}) {
  const listCompletables = () => {
    return (
      isMappable(localCompletables) &&
      localCompletables.map((completable) => (
        <CompletableCard
          eventKey={completable.id}
          completable={completable}
          allCompletables={allCompletables}
          toggleCompletable={toggleCompletable}
          isComplete={isComplete}
          hasNodes={hasNodes}
          hasContentBlocks={hasContentBlocks}
        />
      ))
    );
  };

  const isComplete = (completable) => {
    return allCompletables.find((c) => c.id === completable.id).complete;
  };

  const hasNodes = (c) => {
    return !!c.nodes && !!c.nodes[0];
  };

  const hasContentBlocks = (c) => {
    return !!c.content_blocks && !!c.content_blocks[0];
  };

  const isMappable = (c) => {
    return !!c.map;
  };

  return (
    <Col className="p-0">
      <Accordion>{listCompletables()}</Accordion>
    </Col>
  );
}

export default connect(null, { toggleCompletable })(CompletablesContainer);
