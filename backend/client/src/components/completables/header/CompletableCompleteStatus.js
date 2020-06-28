import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as fasCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";

class CompletableTitle extends Component {
  isComplete = (completable) => {
    return this.props.allCompletables.find((c) => c.id === completable.id)
      .complete;
  };

  render() {
    return this.isComplete(this.props.completable) ? (
      <FontAwesomeIcon icon={fasCircle} />
    ) : (
      <FontAwesomeIcon icon={farCircle} />
    );
  }
}

export default CompletableTitle;
