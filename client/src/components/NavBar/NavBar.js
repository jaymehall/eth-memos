import React from "react";
import { Navbar } from "react-bootstrap";
import EthLogo from "../../images/eth-small.png";

function NavBar({alert}) {
  return (
    <Navbar bg="dark" variant="dark" className="border-bottom border-info">
      <img
        className="rounded-circle"
        style={{ width: "100px", padding: "10px" }}
        src={EthLogo}
      />
      <Navbar.Brand href="/">ETH Memos</Navbar.Brand>
    </Navbar>
  );
}

export default NavBar;
