import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { navLogo } from '../../static/assets/images/logo.png';

const NavigationComponent = props => {
  const dynamicLink = (route, linkText) => {
    return(
        <div className="nav-link-wrapper">
          <NavLink to="/portfolio-manager" activeClassName="nav-link-active">
          Portfolio Manager
          </NavLink>
        </div>
    );
  }
  
  const handleSignOut = () => {
    axios
      .delete("https://api.devcamp.space/logout", {withCredentials: true})
      .then(response => {
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
          console.log("tried signing out");
        }
        return response.data;
      })
      .catch(error => {
        console.log("error signing out", error);
      })
  }

  return(
    <div className="nav-wrapper">
        <div className="logo-wrapper">
          <img src={require('../../static/assets/images/logo.png')} alt=""/>
        </div>
      <div className="left-side">

        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/about-me" activeClassName="nav-link-active">About</NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
        </div>

        {/*<div className="nav-link-wrapper">
          <NavLink to="/blog" activeClassName="nav-link-active">Blog</NavLink>
        </div>
        */}

        {/*<div className="nav-link-wrapper">
          <NavLink to="/portfolio-manager" activeClassName="nav-link-active">Portfolio Manager</NavLink>
        </div>*/}

        {/*** Dynamic Auth Link ***/}
        {props.loggedInStatus === "LOGGED_IN" ? (
          dynamicLink("/portfolio-manager","Portfolio Manager")
        ) : null}

      </div>

      <div className="right-side">
        {props.loggedInStatus === "LOGGED_IN" ? (
            <a className="logout-button" onClick={handleSignOut}>
        <FontAwesomeIcon icon="sign-out-alt" />
      </a>
        ) : null}
      </div>
    </div>
  );
}

export default withRouter(NavigationComponent);
