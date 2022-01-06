import React, { Component } from 'react';

import Login from "../auth/login";
import loginImg from "../../../static/assets/images/auth/login.jpg";



export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleUnSuccessfulAuth = this.handleUnSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth() {
    this.props.handleSuccessfulLogin();
    this.props.history.push("/");
  }
  
  handleUnSuccessfulAuth() {
    this.props.handleUnSuccessfulLogin();
  }

  render() {
    return (
      <div className="auth-page-wrapper">
        <div className="left-column" 
          style={{
              backgroundImage: `url(${loginImg})`
          }}
        />

        <div className="right-column">
        <h1>Login Content Here...</h1>
          <Login 
            handleSuccessfulAuth={this.handleSuccessfulAuth}
            handleUnSuccessfulAuth={this.handleUnSuccessfulAuth}
          />
        </div>
        Auth....
      </div>
    );
  }
}


