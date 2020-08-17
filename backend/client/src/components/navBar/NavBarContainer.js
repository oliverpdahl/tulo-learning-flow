import React from "react";
import { Nav } from "react-bootstrap";
import {
  faQuestionCircle as about,
  faUserAstronaut as user,
  faMeteor as path,
} from "@fortawesome/free-solid-svg-icons";
import NavBarLink from "./NavBarLink";

export default function NavBarContainer() {
  return (
    <div className="sideBar bg-primary fill pt-1 sticky-top">
      <br />
      <h2 className="text-light text-center font-weight-bold">
        D<br />A<br />L<br />O<br />Y
      </h2>
      <Nav defaultActiveKey="/home" className="flex-column text-light pt-4">
        <NavBarLink icon={path} link={"/paths"} />
        <NavBarLink icon={user} link={"/user"} />
        <NavBarLink icon={about} link={"/about"} />
      </Nav>
    </div>
  );
}
