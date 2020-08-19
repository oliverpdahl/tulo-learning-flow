import React from "react";
import Card from "react-bootstrap/Card";
import CompletableHeader from "./header/CompletableHeader";
import CompletableBody from "./body/CompletableBody";
import { Link } from "react-router-dom";
import slugify from "slugify";

function CompletableCard(props) {
  const { completable, isComplete } = props;

  const completeNodes = (c) => {
    if (!!c.nodes && !!c.nodes[0]) {
      return c.nodes.filter((n) => isComplete(n) === true);
    }
  };

  return (
    <Card>
      <Link
        to={`/paths/${slugify(completable.title).toLocaleLowerCase()}`}
        exact="true"
        style={{ textDecoration: "none" }}
      >
        <CompletableHeader {...props} completeNodes={completeNodes} />
      </Link>
      <CompletableBody {...props} completeNodes={completeNodes} />
    </Card>
  );
}

export default CompletableCard;
