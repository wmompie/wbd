import React from 'react';
import styled from 'styled-components';
import { Background } from '../../layouts/elements';
import Title from './Title';

const Header = () => (
  <HeaderStyle>
    <Title mainHead='Welcome to Web Blueprint Design' subHead='We create simple web solutions' />
  </HeaderStyle>
);

export default Header;

const HeaderStyle = styled(Background)`
  align-items: center;
  background-image: url('https://res.cloudinary.com/web-blueprint-design/image/upload/c_scale,e_blur:300,f_auto,q_auto,w_1920/v1556766414/WBD/headerBG.jpg');
  display: flex;
  height: 100vh;
  justify-content: center;
  min-height: 100%;
`;
