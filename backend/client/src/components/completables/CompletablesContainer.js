import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import CompletableCard from "./CompletableCard";
import { connect } from "react-redux";
import { toggleCompletable } from "../../actions/toggleCompletable";

class CompletablesContainer extends Component {
  listCompletables = () => {
    return (
      !!this.props.localCompletables.map &&
      this.props.localCompletables.map((completable) => (
        <CompletableCard
          key={completable.id}
          completable={completable}
          allCompletables={this.props.allCompletables}
          toggleCompletable={this.props.toggleCompletable}
        />
      ))
    );
  };
  render() {
    return (
      <Accordion defaultActiveKey="0">{this.listCompletables()}</Accordion>
    );
  }
}

export default connect(null, { toggleCompletable })(CompletablesContainer);
