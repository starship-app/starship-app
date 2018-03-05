import React, { Component } from 'react';
import './App.css';

// import custom components
import NavbarHeader from './NavbarHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarHeader/>
      </div>
    );
  }
}

export default App;
