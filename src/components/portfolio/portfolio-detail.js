import React, { Component } from 'react';


export default class portfolioDetail extends Component {
  constructor(props){
    super(props);
    console.log(this);
    console.log(props);

  }
  
  render(){
    return (
      <div>
        <h2>Portfolio Detail for {this.props.match.params.slug}</h2>
        <h2>Portfolio Detail for {this.props.match.params.slug}</h2>
      </div>
    );
  }
}

