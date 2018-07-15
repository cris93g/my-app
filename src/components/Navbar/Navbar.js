import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/Home">COMPUTER SPOT</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              <Link to="/Home"> Home</Link>
            </NavItem>

            <NavItem eventKey={2} href="#">
              <Link to="/All">ITEMS</Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Link to="/Cart">MY CART</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              FAQ
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

{
  /* <Link to="/">
          <i class="material-icons md-60">home</i>
        </Link> */
}
