import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Weather Report</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contct Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <br />
    </>
  );
}

export default Navigation;
