import React, { Component } from 'react';
import { Panel,
         ListGroup,
         ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';



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
            <Link to={`/starships/${starship._id}`}>
              { starship.name }
            </Link>
          </Panel.Title>
        </Panel.Heading>
        <ListGroup>
          <ListGroupItem>Ship Type: { starship.shiptype }</ListGroupItem>
          <ListGroupItem>Ship Class: { starship.shipclass }</ListGroupItem>
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

