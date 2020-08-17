import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as fasCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";
import { Col } from "react-bootstrap";

export default function CompletableCompleteStatus({ isComplete, completable }) {
  const fullShape = <FontAwesomeIcon icon={fasCircle} />;
  const emptyShape = <FontAwesomeIcon icon={farCircle} />;
  return <Col xs={0.5}>{isComplete(completable) ? fullShape : emptyShape}</Col>;
}
