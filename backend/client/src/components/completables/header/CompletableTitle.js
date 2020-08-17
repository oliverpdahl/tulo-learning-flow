import React from "react";
import { Col } from "react-bootstrap";

export default function CompletableTitle({ completable: { title } }) {
  return <Col>{title}</Col>;
}
