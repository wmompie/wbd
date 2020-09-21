import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from './Logo';

const Navbar = ({ id }) => (
  <Nav id={id} className='navbar navbar-expand-md navbar-light bg-light'>
    <div className='container-fluid'>
      <a href='/' className='navbar-brand'>
        <Logo />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarContent'
        aria-controls='navbarContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarContent'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item mx-3'>
            <ScrollLink
              className='nav-link'
              to='whatwedo'
              smooth={true}
              offset={-40}
              duration={900}
              style={anchorStyle}
            >
              WHAT WE DO
            </ScrollLink>
          </li>
          <li className='nav-item mx-3'>
            <ScrollLink
              className='nav-link'
              to='pricing'
              smooth={true}
              offset={-40}
              duration={900}
              style={anchorStyle}
            >
              PRICING
            </ScrollLink>
          </li>
          <li className='nav-item mx-3'>
            <ScrollLink className='nav-link' to='contact' smooth={true} duration={900} style={anchorStyle}>
              CONTACT
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  </Nav>
);

Navbar.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Navbar;

const anchorStyle = {
  // color: '#01a4e4',  - original color
  color: '#015d84',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  z-index: 9999;

  @media (min-width: 992px) {
    position: relative;
  }

  @media (max-width: 575px) {
    .logo {
      height: 40px;
    }
  }
`;
