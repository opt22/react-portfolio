import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'


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
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink to="/about-me" activeClassName="nav-link-active">About</NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink to="/blog" activeClassName="nav-link-active">Blog</NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
          </div>
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
            <button>Blog</button>
            {/* {true ? <button>AddBlog</button> : null} */}
        </div>
        <div className="right-side">
          RIGHT SIDE
        </div>
      </div>
    );
  }
}



