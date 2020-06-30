import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CompletableHeader from "./header/CompletableHeader";
import CompletableBody from "./body/CompletableBody";
import { Link } from "react-router-dom";
import slugify from "slugify";

class CompletableCard extends Component {
  completeNodes = (completable) => {
    if (!!completable.nodes && !!completable.nodes[0]) {
      return completable.nodes.filter((n) => this.props.isComplete(n) === true);
    }
  };

  render() {
    return (
      <Card>
        <Link
          to={`/paths/${slugify(
            this.props.completable.title
          ).toLocaleLowerCase()}`}
          exact
          style={{ textDecoration: "none" }}
        >
          <CompletableHeader
            completable={this.props.completable}
            allCompletables={this.props.allCompletables}
            isComplete={this.props.isComplete}
            completeNodes={this.completeNodes}
          />
          <CompletableBody
            completable={this.props.completable}
            allCompletables={this.props.allCompletables}
            toggleCompletable={this.props.toggleCompletable}
            completeNodes={this.completeNodes}
            isComplete={this.props.isComplete}
          />
        </Link>
      </Card>
    );
  }
}

export default CompletableCard;
