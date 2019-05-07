import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div>
        <h1>Footer Section</h1>
        <div>
          <div>
            <h2>SITEMAP</h2>
            <hr />

            <ul>
              <li>
                <Link to='/'>Welcome</Link>
              </li>
              <li>
                <Link to='/'>What We Do</Link>
              </li>
              <li>
                <Link to='/'>Projects</Link>
              </li>
              <li>
                <Link to='/'>Contact Us</Link>
              </li>
              <li>
                <Link to='/resume' target='_blank'>
                  Resume
                </Link>
              </li>
              <li>
                <Link to='/terms' target='_blank'>
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to='/privacy' target='_blank'>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>WHERE TO FIND US</h2>
            <hr />
            <div>
              <li>Web Blueprint Design,</li>
              <li>Fort Lauderdale, FL</li>
              <li>&#40;754&#41; 900-4223</li>
              <li>
                <a href='mailto:sales@webblueprintdesign.com'>sales&#64;webblueprintdesign.com</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
