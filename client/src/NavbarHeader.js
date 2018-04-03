import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home';
import StarshipForm from './StarshipForm';

export default class NavbarHeader extends Component {
  render() {
    return (
      <Router>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Starship App</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullLeft>
              <NavItem eventKey={1} href="#">
                Inventory List
              </NavItem>
              <NavItem componentClass={Link} href="/starship/create" to="/starship/create">
                Create Starship Test 1
              </NavItem>
              <NavItem eventKey={2} href="#">
                Create Starship Test 2
              </NavItem>
            </Nav>
          </Navbar.Collapse>

          <Route exact path="/" component={Home} />
          <Route path="/starship/create" component={StarshipForm} />

        </Navbar>
      </Router>
    );
  }
}

