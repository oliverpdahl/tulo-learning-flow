import React from "react";
import { Col } from "react-bootstrap";
import Video from "../content/Video";

export default function AboutContainer() {
  return (
    <Col className="pt-3">
      <h1>About</h1>
      <p>Watch this video to learn more about how to use this app</p>
      <Video link={"https://youtu.be/QtSCp-smFpQ"} />
    </Col>
  );
}
