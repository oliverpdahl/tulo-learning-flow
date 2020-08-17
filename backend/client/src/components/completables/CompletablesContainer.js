import React, { Component } from "react";
import { Accordion, Col, Button } from "react-bootstrap";
import CompletableCard from "./CompletableCard";
import { connect } from "react-redux";
import { toggleCompletable } from "../../actions/toggleCompletable";

function CompletablesContainer(props) {
  const listCompletables = () => {
    return (
      !!props.localCompletables.map &&
      props.localCompletables.map((completable) => (
        <CompletableCard
          eventKey={completable.id}
          completable={completable}
          allCompletables={props.allCompletables}
          toggleCompletable={props.toggleCompletable}
          isComplete={isComplete}
          hasNodes={hasNodes}
          hasContentBlocks={hasContentBlocks}
        />
      ))
    );
  };

  const isComplete = (completable) => {
    return props.allCompletables.find((c) => c.id === completable.id).complete;
  };

  const hasNodes = (c) => {
    return !!c.nodes && !!c.nodes[0];
  };

  const hasContentBlocks = (c) => {
    return !!c.content_blocks && !!c.content_blocks[0];
  };

  return (
    <Col className="p-0">
      <Accordion>{listCompletables()}</Accordion>
    </Col>
  );
}

export default connect(null, { toggleCompletable })(CompletablesContainer);
