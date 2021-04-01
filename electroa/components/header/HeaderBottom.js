import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

const HeaderBottom = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/signin">
            <Nav.Link href="/signin">Home</Nav.Link>
          </Link>
          <Link href="/category">
            <Nav.Link href="/Category">Category</Nav.Link>
          </Link>
          <Link href="/phone">
            <Nav.Link href="/phone">Phone</Nav.Link>
          </Link>
          <Link href="/camera">
            <Nav.Link href="/camera">Camera</Nav.Link>
          </Link>
          <Link href="/tablet">
            <Nav.Link href="/tablet">Tablet</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderBottom;
