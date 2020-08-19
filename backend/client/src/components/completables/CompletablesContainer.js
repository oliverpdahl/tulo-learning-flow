import React, { Component } from "react";
import { Accordion, Col, Button } from "react-bootstrap";
import CompletableCard from "./CompletableCard";
import { connect } from "react-redux";
import { toggleCompletable } from "../../actions/toggleCompletable";

class CompletablesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: false,
    };
  }
  listCompletables = () => {
    const completables = this.state.sorted
      ? this.props.localCompletables
          .slice()
          .sort((a, b) => (a.title > b.title ? 1 : -1))
      : this.props.localCompletables;
    return completables.map((completable) => (
      <CompletableCard
        key={completable.id}
        eventKey={completable.id}
        completable={completable}
        allCompletables={this.props.allCompletables}
        toggleCompletable={this.props.toggleCompletable}
        isComplete={this.isComplete}
        hasNodes={this.hasNodes}
        hasContentBlocks={this.hasContentBlocks}
      />
    ));
  };

  isComplete = (completable) => {
    return this.props.allCompletables.find((c) => c.id === completable.id)
      .complete;
  };

  hasNodes = (c) => {
    return !!c.nodes && !!c.nodes[0];
  };

  hasContentBlocks = (c) => {
    return !!c.content_blocks && !!c.content_blocks[0];
  };

  isMappable = (c) => {
    return !!c.map;
  };

  handleOnClick = () => {
    this.setState({ sorted: !this.state.sorted });
  };

  showSortButton = () => {
    return (
      !!this.props.localCompletables &&
      !!this.props.localCompletables[0] &&
      !!this.props.localCompletables[0].nodes
    );
  };

  render() {
    return (
      <Col className="p-0">
        <Accordion>{this.listCompletables()}</Accordion>
        {this.showSortButton() && (
          <Button
            className="btn btn-primary fluid"
            block
            onClick={this.handleOnClick}
          >
            Sort
          </Button>
        )}
      </Col>
    );
  }
}

export default connect(null, { toggleCompletable })(CompletablesContainer);
