import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CompletableHeader from "./header/CompletableHeader";
import CompletableBody from "./body/CompletableBody";
import { Link } from "react-router-dom";
import slugify from "slugify";

class CompletableCard extends Component {
  render() {
    return (
      <Card>
        <Link
          to={slugify(this.props.completable.title).toLocaleLowerCase()}
          style={{ textDecoration: "none" }}
        >
          <CompletableHeader
            completable={this.props.completable}
            allCompletables={this.props.allCompletables}
          />
          <CompletableBody
            completable={this.props.completable}
            allCompletables={this.props.allCompletables}
            toggleCompletable={this.props.toggleCompletable}
          />
        </Link>
      </Card>
    );
  }
}

export default CompletableCard;
