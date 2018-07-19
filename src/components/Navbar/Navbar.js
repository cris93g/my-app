import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { connect } from "react-redux";
import { getUser } from "../../redux/ducks/itemsReducer";
import Logo from "../IMG/logo.png";

export default class CustomNavbar extends Component {
  componentDidMount() {
    this.props.getUser;
  }
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">COMPUTER SPOT</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              <Link to="/FrontPage"> Home</Link>
            </NavItem>

            {/* <NavItem eventKey={2} href="#"> */}
            <Link to="/All">Items</Link>
            {/* </NavItem> */}
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Link to="/Cart">My Cart</Link>
            </NavItem>
            <NavItem eventKey={1} href="#">
              <Link to="/Orders">My Orders</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/FAQ">FAQ</Link>
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
