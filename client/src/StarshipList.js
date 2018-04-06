import React, { Component } from 'react';
import { Panel,
         ListGroup,
         ListGroupItem } from 'react-bootstrap';


export default class StarshipList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ships: []
    };
  }

  componentDidMount() {
    fetch('/starships', {
      method: 'GET'
    })
      // transform the returned GET resource into JSON object
      .then(res => {
        res.json()
        // set the array of starships as value in key ships
        .then(ships => {
          this.setState({ ships: ships.starships });
        });
      });
  }

  eachStarship() {
    return this.state.ships.map(starship =>
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">
            { starship.name }
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>Ship Description</Panel.Body>
        <ListGroup>
          <ListGroupItem>Ship Type: { starship.shiptype }</ListGroupItem>
          <ListGroupItem>Ship Class: { starship.shipclass }</ListGroupItem>
          <ListGroupItem>Ship Attr: {  }</ListGroupItem>
          <ListGroupItem>Ship Attr: {  }</ListGroupItem>
          <ListGroupItem>Ship Attr: {  }</ListGroupItem>
          <ListGroupItem>Ship Attr: {  }</ListGroupItem>
        </ListGroup>
      </Panel>
    );
  }

  render() {
    return (
      <div>

        { this.eachStarship() }

      </div>
    );
  }
}

