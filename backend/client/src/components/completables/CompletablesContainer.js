import React, { Component } from "react";
import { Accordion, Col } from "react-bootstrap";
import CompletableCard from "./CompletableCard";
import { connect } from "react-redux";
import { toggleCompletable } from "../../actions/toggleCompletable";

class CompletablesContainer extends Component {
  listCompletables = () => {
    return (
      !!this.props.localCompletables.map &&
      this.props.localCompletables.map((completable) => (
        <CompletableCard
          eventKey={completable.id}
          completable={completable}
          allCompletables={this.props.allCompletables}
          toggleCompletable={this.props.toggleCompletable}
          isComplete={this.isComplete}
        />
      ))
    );
  };

  isComplete = (completable) => {
    return this.props.allCompletables.find((c) => c.id === completable.id)
      .complete;
  };

  render() {
    return (
      <Col className="p-0">
        <Accordion>{this.listCompletables()}</Accordion>
      </Col>
    );
  }
}

export default connect(null, { toggleCompletable })(CompletablesContainer);
