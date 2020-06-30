import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBarLink extends Component {
  render() {
    return (
      <Nav.Link className="text-light text-center" href={this.props.link}>
        <FontAwesomeIcon icon={this.props.icon} size="2x" />
      </Nav.Link>
    );
  }
}

export default NavBarLink;
