import React, { Component } from "react";
import { Button } from "react-bootstrap";

class CompletableCompleteButton extends Component {
  handleOnClick = () => {
    const allC = this.props.allCompletables.find(
      (c) => c.id === this.props.completable.id
    );
    this.props.toggleCompletable(allC);
  };

  render() {
    return (
      <Button variant="primary" onClick={this.handleOnClick} block>
        Complete
      </Button>
    );
  }
}

export default CompletableCompleteButton;
