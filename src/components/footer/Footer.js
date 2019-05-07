import React, { Component } from 'react';

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
                <a href='/'>Welcome</a>
              </li>
              <li>
                <a href='/'>What We Do</a>
              </li>
              <li>
                <a href='/'>Projects</a>
              </li>
              <li>
                <a href='/'>Contact Us</a>
              </li>
              <li>
                <a href='/resume' target='_blank'>
                  Resume
                </a>
              </li>
              <li>
                <a href='/terms' target='_blank'>
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href='/privacy' target='_blank'>
                  Privacy Policy
                </a>
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
