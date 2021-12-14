import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './NavigationComponent.css';

class NavigationComponent extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
        <button>Blog</button>
        <button>AddBlog</button>
        
      </div>
    );
  }
}

export default NavigationComponent;
