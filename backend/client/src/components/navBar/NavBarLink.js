import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBarLink({ link, icon }) {
  return (
    <NavLink
      className="text-light text-center m-2"
      activeClassName="active"
      to={link}
    >
      <FontAwesomeIcon icon={icon} size="2x" />
    </NavLink>
  );
}
