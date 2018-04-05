import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router,
         Route,
         Switch } from "react-router-dom";

// import custom components
import NavbarHeader from './NavbarHeader';
import Home from './Home';
import StarshipForm from './StarshipForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavbarHeader/>

            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />       
                <Route path="/starship/create" component={StarshipForm} />
              </Switch>
            </div>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
