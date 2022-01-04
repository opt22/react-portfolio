import React, { Component } from 'react';
import axios from 'axios';

/* ===================================================================== */

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

/* ===================================================================== */

  handleChange(event) {
    console.log("handle change",  event);
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    })

  }

  handleSubmit(event) {
    axios.post("https://api.devcamp.space/sessions",
      {
        client: {
          email: this.state.email,
          password: this.state.password
        }
      },
      {
        withCredentials: true
      }).then(response => {
        if (response.data.status === 'created'){
        console.log("okey dokey");
        console.log("response", response);
      }else {
        this.setState({
          errorText: "wrong email or password"
        })
      }
      }).catch(error => {
        console.log("error:wrong or missing api endpoint");
        this.setState({
          errorText: `"error:wrong or missing api endpoint: ${error}"`
        })
      })

    console.log("handle submit",  event);
    /* event.preventDefault(); */
    event.preventDefault();

    console.log(event.target.password.value);
  }


/* ===================================================================== */

  render() {
    return (
      <div>
        <h1>Form Here</h1>
        <h3>errors:</h3>
        <div>{this.state.errorText}</div>
        <h2>this is le email: {this.state.email}</h2>
        <h2>this is le pw: {this.state.password}</h2>
        <form onSubmit={this.handleSubmit}>
          <input 
          type="email" 
          name="email" 
          placeholder="Your email" 
          value={this.state.email}
          onChange={this.handleChange}
          />
          <input 
          type="password" 
          name="password" 
          placeholder="Your password" 
          value={this.state.password}
          onChange={this.handleChange}
          />
          <div>
            <button type="submit">Login</button>
          </div>
        </form>

      </div>
    );
  }
}

