import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to='/'>
            <img
              src='https://res.cloudinary.com/web-blueprint-design/image/upload/c_scale,f_auto,q_auto,w_250/v1555381549/WBD/wbd-transparent_lmrgdh.png'
              alt='Web Blueprint Design Brand'
            />
          </Link>
          <ul>
            <li>
              <Link to='/'>WHAT WE DO</Link>
            </li>
            <li>
              <Link to='/'>PROJECTS</Link>
            </li>
            <li>
              <Link to='/'>CONTACT</Link>
            </li>
            <li>
              <Link to='/resume' target='_blank'>
                RESUME
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
