import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class NavbarHeader extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Starship App</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Sign In!
            </NavItem>
            <NavItem eventKey={2} href="#">
              Sign Up!
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

