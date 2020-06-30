import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle as help,
  faUserAstronaut as user,
  faMeteor as path,
} from "@fortawesome/free-solid-svg-icons";
import NavBarLink from "./NavBarLink";

class NavBarContainer extends Component {
  render() {
    return (
      <div className="sideBar bg-primary fill pt-1">
        <br />
        <h2 className="text-light text-center font-weight-bold">
          T<br />U<br />L<br />O
        </h2>
        <Nav defaultActiveKey="/home" className="flex-column text-light pt-4">
          <Nav.Link className="text-light" href="/home">
            <FontAwesomeIcon icon={path} size="2x" />
          </Nav.Link>
          <NavBarLink icon={user} link={"/user"} />
          <Nav.Link eventKey="link-2" className="text-light text-center">
            <FontAwesomeIcon icon={help} size="2x" />
          </Nav.Link>
        </Nav>
      </div>
    );
  }
}

export default NavBarContainer;
