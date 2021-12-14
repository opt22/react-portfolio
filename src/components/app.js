import React, { Component } from 'react';
import PortfolioContainer from './portfolio/portfolio-container.js'
import NavigationContainer from './portfolio/navigation-container.js'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <h1>The Great Something</h1>
        <h2>somethin start</h2>
        <PortfolioContainer />
        <h2>somethin end</h2>
      </div>
    );
  }
}
