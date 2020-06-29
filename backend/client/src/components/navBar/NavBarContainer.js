import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle as help,
  faUserAstronaut as user,
} from "@fortawesome/free-solid-svg-icons";

class NavBarContainer extends Component {
  render() {
    return (
      <div className="sideBar bg-primary fill">
        <br />
        <h2 className="text-light text-center font-weight-bold">
          T<br />U<br />L<br />O
        </h2>
        <Nav defaultActiveKey="/home" className="flex-column text-light">
          <Nav.Link className="text-light" href="/home">
            Active
          </Nav.Link>
          <Nav.Link className="text-light text-center" eventKey="link-1">
            <FontAwesomeIcon icon={user} size="xl" />
          </Nav.Link>
          <Nav.Link eventKey="link-2" className="text-light text-center">
            <FontAwesomeIcon icon={help} size="xl" />
          </Nav.Link>
        </Nav>
      </div>
    );
  }
}

export default NavBarContainer;
