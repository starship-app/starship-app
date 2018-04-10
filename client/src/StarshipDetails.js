import React, { Component } from 'react';
import { Panel,
         ListGroup,
         ListGroupItem } from 'react-bootstrap';

export default class StarshipDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ship: []
    };
  }

  componentDidMount() {
    fetch(('/starships/'+this.props.match.params.id), {
      method: 'GET'
    })
      // transform the returned GET resource into JSON object
      .then(res => {
        res.json()
        // set the array of starships as value in key ships
        .then(ship => {
          this.setState({ ship: ship.starship });
        });
      });
  }

  render() {
    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">
                { this.state.ship.name }
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>Ship Description</Panel.Body>
          <ListGroup>
            <ListGroupItem>Ship Type: { this.state.ship.shiptype }</ListGroupItem>
            <ListGroupItem>Ship Class: { this.state.ship.shipclass }</ListGroupItem>
            <ListGroupItem>Ship Attr: {  }</ListGroupItem>
            <ListGroupItem>Ship Attr: {  }</ListGroupItem>
          </ListGroup>
        </Panel>
      </div>
    );
  }
}

