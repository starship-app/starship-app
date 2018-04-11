import React, { Component } from 'react';
import { FormGroup,
         ControlLabel,
         FormControl,
         Button } from 'react-bootstrap';
import { Redirect } from "react-router-dom";


export default class StarshipEdit extends Component {
  /* React forms documentation:
     https://reactjs.org/docs/forms.html
  */

  constructor(props) {
    super(props);
    this.state = {
      ship: [],
      // this is a flag for redirect after POST
      redirectAfterSubmit: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      shiptype: this.state.shiptype,
      shipclass: this.state.shipclass
    }
    fetch('/starships/', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.setState({ redirectAfterSubmit: true })
  }

  render() {
    const { redirectAfterSubmit } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>Starship Name</ControlLabel>
            <FormControl
              id="formControlsName"
              type="text"
              label="Starship Name"
              placeholder={this.state.ship.name}
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Starship Type</ControlLabel>
            <FormControl
              id="formControlsShipType"
              type="text"
              label="StarshipType"
              placeholder={this.state.ship.shiptype}
              value={this.state.shiptype}
              onChange={this.handleChange}
              name="shiptype"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Starship Class</ControlLabel>
            <FormControl
              id="formControlsShipClass"
              type="text"
              label="StarshipClass"
              placeholder={this.state.ship.shipclass}
              value={this.state.shipclass}
              onChange={this.handleChange}
              name="shipclass"
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>

        { redirectAfterSubmit && (<Redirect to='/starships'/>) }
      </div>
    );
  }
}

