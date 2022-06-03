import React from "react";
import { Navbar, Container, Nav, NavItem } from "react-bootstrap";
import EthLogo from "../../images/eth-small.png";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" className="border-bottom border-info">
      <img
        className="rounded-circle"
        style={{ width: "100px", padding: "10px" }}
        src={EthLogo}
      />
      <Navbar.Brand href="#home">ETH Memos</Navbar.Brand>
      <Nav className="container-fluid navbar-right">
        <Nav.Link className="ms-auto" href="#new">New</Nav.Link>
        <Nav.Link href="#save">Save</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
