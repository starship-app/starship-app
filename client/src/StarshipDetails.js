import React, { Component } from 'react';
import { Panel,
         ListGroup,
         ListGroupItem,
         Button } from 'react-bootstrap';
import { Redirect, Link } from "react-router-dom";

export default class StarshipDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ship: [],
      // this is a flag for redirect after DELETE
      redirectAfterDelete: false
    };

    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(event) {
    fetch(('/starships/'+this.props.match.params.id), {
      method: 'DELETE'
    });

    this.setState({ redirectAfterDelete: true })
  }

  render() {
    const { redirectAfterDelete } = this.state

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
          <Panel.Footer>
            <Button bsStyle="primary"
                    componentClass={Link}
                    href={`/starships/edit/${this.state.ship._id}`}
                    to={`/starships/edit/${this.state.ship._id}`}>
              Edit
            </Button>
            <Button className="pull-right" bsStyle="danger" bsSize="xsmall" onClick={this.handleDelete}>
              Delete
            </Button>
          </Panel.Footer>
        </Panel>
        { redirectAfterDelete && (<Redirect to='/starships'/>) }
      </div>
    );
  }
}

