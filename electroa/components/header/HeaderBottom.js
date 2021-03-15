import React from "react";
import { Navbar, Nav } from 'react-bootstrap'

const HeaderBottom = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#hot_deals">Hot Deals</Nav.Link>
          <Nav.Link href="#categories">Categories</Nav.Link>
          <Nav.Link href="#laptop">Laptop</Nav.Link>
          <Nav.Link href="#smartphone">SmartPhone</Nav.Link>
          <Nav.Link href="#camera">Camera</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderBottom;
