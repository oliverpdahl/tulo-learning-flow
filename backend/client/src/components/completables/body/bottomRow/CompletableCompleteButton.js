import React, { Component } from "react";
import { Button } from "react-bootstrap";

class CompletableCompleteButton extends Component {
  handleOnClick = () => {
    const allC = this.props.allCompletables.find(
      (c) => c.id === this.props.completable.id
    );
    this.props.toggleCompletable(allC);
  };

  allNodeComplete = () => {
    if (!!this.props.completable.nodes && !!this.props.completable.nodes[0]) {
      return (
        !!this.props.completeNodes(this.props.completable) &&
        !(
          this.props.completeNodes(this.props.completable).length ===
          this.props.completable.nodes.length
        )
      );
    }
  };

  disabled = () => {
    return this.allNodeComplete()
      ? !this.props.isComplete(this.props.completable)
      : false;
  };

  render() {
    return (
      <Button
        variant="primary"
        onClick={this.handleOnClick}
        disabled={this.disabled()}
        block
      >
        Mark Complete
      </Button>
    );
  }
}

export default CompletableCompleteButton;
