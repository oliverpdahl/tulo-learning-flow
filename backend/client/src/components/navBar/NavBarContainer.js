import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class NavBarContainer extends Component {
  render() {
    return (
      <Navbar bg="primary">
        <Navbar.Brand href="/">
          <h3 className="font=weight-bold text-light">TULO</h3>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default NavBarContainer;
