import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { Sale } from '../../layouts/elements';
import PropTypes from 'prop-types';

const FirstWebsite = ({ id }) => (
  <MainStyle id={id}>
    <Link className='nav-link font-weight-bold' to='contact' smooth={true} duration={900}>
      <Sale className='shadow-lg'>
        Now <span className='font-weight-bold font-italic'>50%</span> off your first Website
      </Sale>
    </Link>
  </MainStyle>
);

FirstWebsite.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FirstWebsite;

const MainStyle = styled.div`
  background-color: #01a4e4;
  height: 250px;
  text-align: center;
`;
