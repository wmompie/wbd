import React from 'react';
import styled from 'styled-components';
import { Heading5 } from '../../elements';
import PropTypes from 'prop-types';

const Arrow = styled.i`
  color: #01a4e4;
  float: left;
  margin-right: 1rem;
  padding: 0.25rem 0 0 0.5rem;
`;
const WGHeading = styled(Heading5)`
  color: #212529;
  float: left;
  font-weight: 600;
`;

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
