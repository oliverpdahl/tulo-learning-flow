import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle as about,
  faUserAstronaut as user,
  faMeteor as paths,
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
          <NavBarLink icon={paths} link={"/paths"} />
          <NavBarLink icon={user} link={"/user"} />
          <NavBarLink icon={about} link={"/about"} />
        </Nav>
      </div>
    );
  }
}

export default NavBarContainer;
