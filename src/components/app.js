import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import axios from 'axios'

import NavigationContainer from './navigation-container.js'
import Home from './pages/home.js'
import About from './pages/about.js'
import Blog from './pages/blog.js'
import PortfolioManager from './pages/portfolio-manager.js'
import Contact from './pages/contact.js'
import PortfolioDetail from './portfolio/portfolio-detail.js'
import Auth from './pages/auth'
import NoMatch from './portfolio/no-match.js'

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
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

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus(){
    return axios
      .get("https://api.devcamp.space/logged_in", { 
        withCredentials: true 
      })
      .then(response => {
        console.log("logged_in return:", response);

        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("ERROR:", error);
      })
    }
  componentDidMount(){
    this.checkLoginStatus
  }

  authorizedPages() {
    return [ 
      //*<Route path="/PortfolioManager" component={PortfolioManager} /> *//
    ]
  }
      
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer 
            loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulLogout={this.handleSuccessfulLogout}
            />
            <h1 style= {{ color: "grey"}} >App Start</h1>
            <h2>{this.state.loggedInStatus}</h2>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-me" component={About} />
            <Route 
              path="/auth" 
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin = {this.handleSuccessfulLogin}
                    handleUnSuccessfulLogin = {this.handleUnSuccessfulLogin}
                  />
                )}
            />

            <Route path="/auth" component={Auth} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/portfolio-manager" component={PortfolioManager} /> 

            {/********AUTHORIZED LINKS ROUTE GUARD*******/}
            {this.state.loggedInStatus === "LOGGED_IN" ? (
              this.authorizedPages()
            ): null}

            <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
            <Route component={NoMatch} />
          </Switch>
            <h1 style= {{ color: "grey"}} >App End</h1>
       </Router>
      </div>
    );
  }
}

