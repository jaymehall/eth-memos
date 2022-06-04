import React from "react";
import { Alert, Navbar } from "react-bootstrap";
import EthLogo from "../../images/eth-small.png";

function NavBar({alert}) {
  return (
    <Navbar bg="dark" variant="dark" className="border-bottom border-info">
      <img
        className="rounded-circle"
        style={{ width: "100px", padding: "10px" }}
        src={EthLogo}
      />
      <Navbar.Brand href="#home">ETH Memos</Navbar.Brand>
      {/* <Alert title={alert} style={{width: "50vw"}} /> */}
    </Navbar>
  );
}

export default NavBar;
