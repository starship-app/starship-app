import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router,
         Route,
         Switch } from "react-router-dom";

// import custom components
import NavbarHeader from './NavbarHeader';
import Home from './Home';
import StarshipForm from './StarshipForm';
import StarshipList from './StarshipList';
import StarshipDetails from './StarshipDetails';

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
                <Route exact path="/starships" component={StarshipList} />
                <Route path="/starship/create" component={StarshipForm} />
                <Route exact path="/starships/:id" component={StarshipDetails} />
                <Route component={Home} />
              </Switch>
            </div>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
