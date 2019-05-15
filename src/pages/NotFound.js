import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import particleOptions from '../components/particleOptions';
import styled from 'styled-components';

const particleStyle = {
  backgroundColor: '#01a4e4',
  height: '100vh',
  left: '0',
  position: 'fixed',
  top: '0',
  width: '100%',
  zIndex: '-1',
};

const ToHome = styled.span`
  align-items: center;
  background-color: #282828;
  border-radius: 8%;
  border: 1px solid #fefefe;
  box-sizing: border-box;
  color: #fefefe;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  left: 20px;
  opacity: 0.7;
  padding: 0 10px;
  position: fixed;
  top: 15%;
  transition: opacity 0.6s ease-in-out;
  z-index: 999;
  &:hover {
    background-color: #01a4e4;
  }
`;

const Centered = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const NotFound = () => (
  <div>
    <Particles params={particleOptions} style={particleStyle} />
    <Link to='/'>
      <ToHome>
        <i className='far fa-arrow-alt-left' /> Go Back Home
      </ToHome>
    </Link>
    <Centered>
      <img
        className='img-fluid'
        src='https://res.cloudinary.com/web-blueprint-design/image/upload/f_auto,q_auto/v1556773945/WBD/error404_domjrg.png'
        alt='404 Error Message'
      />
    </Centered>
  </div>
);

export default NotFound;
