import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import NavigationContainer from './navigation-container.js'
import Home from './pages/home.js'
import About from './pages/about.js'
import Blog from './pages/blog.js'
import Contact from './pages/contact.js'
import PortfolioDetail from './portfolio/portfolio-detail.js'
import NoMatch from './portfolio/no-match.js'

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

export default class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className='app'>
        <Router>
          <div>
          <NavigationContainer />
          <h1>The Great Something</h1>
          <h2>something start</h2>
          <h2>somethin end</h2>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-me" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog" component={Blog} />
            <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
            <Route component={NoMatch} />
          </Switch>
          </div>
       </Router>
      </div>
    );
  }
}

