import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <a href='/'>
            <img
              src='https://res.cloudinary.com/web-blueprint-design/image/upload/c_scale,f_auto,q_auto,w_250/v1555381549/WBD/wbd-transparent_lmrgdh.png'
              alt='Web Blueprint Design Brand'
            />
          </a>
          <ul>
            <li>
              <a href='/'>WHAT WE DO</a>
            </li>
            <li>
              <a href='/'>PROJECTS</a>
            </li>
            <li>
              <a href='/'>CONTACT</a>
            </li>
            <li>
              <a href='/resume' target='_blank'>
                RESUME
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
