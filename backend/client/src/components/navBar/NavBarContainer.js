import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class NavBarContainer extends Component {
  render() {
    return (
      <div>
        <br />
        <h3 className="text-light text-center">Tulo</h3>
        <Nav defaultActiveKey="/home" className="flex-sm-column text-light">
          <Nav.Link className="text-light" href="/home">
            Active
          </Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      </div>
    );
  }
}

export default NavBarContainer;
