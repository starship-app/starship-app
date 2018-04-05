import React, { Component } from 'react';
import { FormGroup,
         ControlLabel,
         FormControl,
         Button } from 'react-bootstrap';


export default class StarshipForm extends Component {
  /* React forms documentation:
     https://reactjs.org/docs/forms.html
  */

  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

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
    fetch('/starship/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>Starship Name</ControlLabel>
          <FormControl
            id="formControlsName"
            type="text"
            label="Starship Name"
            placeholder="Enter starship designation"
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
            placeholder="Enter starship ship type (e.g. Interceptor)"
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
            placeholder="Enter starship class type (e.g. Capital Class)"
            value={this.state.shipclass}
            onChange={this.handleChange}
            name="shipclass"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

