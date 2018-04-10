import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class NavbarHeader extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Elite Enterprises</h1>
        <p>
          Private Starship Shipyard
        </p>
      </Jumbotron>
    );
  }
}

