import React from 'react';
import styled from 'styled-components';
import { Heading3 } from '../layouts/elements';
import PropTypes from 'prop-types';

const Bullet = ({ heading }) => (
  <div className='col-12'>
    <Arrow className='fas fa-long-arrow-alt-right' />
    <WGHeading>{heading}</WGHeading>
  </div>
);

Bullet.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Bullet;

const Arrow = styled.i`
  color: #01a4e4;
  float: left;
  margin-right: 1rem;
  padding: 0.25rem 0 0 0.5rem;
`;
const WGHeading = styled(Heading3)`
  color: #212529;
  float: left;
  font-weight: 600;
`;
