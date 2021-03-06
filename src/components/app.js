import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSignOutAlt, faEdit} from '@fortawesome/free-solid-svg-icons';

import NavigationContainer from './navigation-container.js'
import Home from './pages/home.js'
import About from './pages/about.js'
import Blog from './pages/blog.js'
import PortfolioManager from './pages/portfolio-manager.js'
import Contact from './pages/contact.js'
import PortfolioDetail from './portfolio/portfolio-detail.js'
import PortfolioItem from './portfolio/portfolio-item.js'
import Auth from './pages/auth'
import NoMatch from './portfolio/no-match.js'
                            
library.add(faTrash, faSignOutAlt, faEdit)
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
    this.cacheCurrentItem = this.cacheCurrentItem.bind(this);
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

  cacheCurrentItem(itemData, itemId) {
    console.log(itemData);
    console.log(itemId);
    {/*
      this.setState(
      {itemId: itemData}
    )
    */}

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
            <Route 
              key="portfolio-manager"
              path="/portfolio-manager" 
              component={PortfolioManager} 
            /> 
    ]
  }

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

  render() {
  console.log(this);
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer 
            loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulLogout={this.handleSuccessfulLogout}
            />

          <Switch>

            <Route 
              exact 
              path="/" 
              component={Home} />

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

            <Route path="/about-me" component={About} />
            <Route path="/contact" component={Contact} />

            {/**<Route path="/blog" component={Blog} />*/}

            {/********AUTHORIZED LINKS ROUTE GUARD*******/}

            {this.state.loggedInStatus === "LOGGED_IN" 
              ? this.authorizedPages()
              : null}

            <Route 
              exact 
              path="/portfolio/:slug" 
              component={PortfolioDetail}
            />

            <Route component={NoMatch} />

          </Switch>
        </div>
       </Router>
      </div>
    );
  }
}

