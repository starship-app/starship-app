import React, { Component } from 'react';
import { FormGroup,
         ControlLabel,
         FormControl } from 'react-bootstrap';


export default class StarshipForm extends Component {

  render() {
    return (
      <form>
        <FormGroup>
          <ControlLabel>Starship Name</ControlLabel>
          <FormControl
            id="formControlsName"
            type="text"
            label="Starship Name"
            placeholder="Enter starship designation"
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Starship Type</ControlLabel>
          <FormControl
            id="formControlsShipType"
            type="text"
            label="StarshipType"
            placeholder="Enter starship ship type (e.g. Interceptor)"
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Starship Class</ControlLabel>
          <FormControl
            id="formControlsShipClass"
            type="text"
            label="StarshipClass"
            placeholder="Enter starship class type (e.g. Capital Class)"
          />
        </FormGroup>
      </form>
    )
  }
}

