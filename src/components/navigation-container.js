import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NavigationComponent extends Component {
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
        {true ? <button>AddBlog</button> : null}

      </div>
    );
  }
}



