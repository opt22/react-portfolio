import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import NavigationContainer from './navigation-container.js'
import Home from './pages/home.js'
import About from './pages/about.js'
import Blog from './pages/blog.js'
import Contact from './pages/contact.js'
import PortfolioDetail from './portfolio/portfolio-detail.js'
import Auth from './pages/auth'
import NoMatch from './portfolio/no-match.js'

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

export default class App extends Component {
  constructor(props){
    super(props);
    
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer />
            <h1>App Start</h1>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-me" component={About} />
            /* <Route path="/auth" component={Auth} /> */

             <Route path="/auth" component={Auth} /> */

            <Route path="/auth" component={Auth} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
            <Route component={NoMatch} />
          </Switch>
            <h1>App End</h1>
       </Router>
      </div>
    );
  }
}

