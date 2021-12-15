import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PortfolioContainer from './portfolio/portfolio-container.js'
import NavigationContainer from './navigation-container.js'
import Home from './pages/home.js'
import About from './pages/about.js'

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
          <NavigationContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-me" component={About} />
          </Switch>
          <h1>The Great Something</h1>
          <h2>something start</h2>
          <PortfolioContainer />
          <h2>somethin end</h2>
          </div>
       </Router>
      </div>
    );
  }
}

