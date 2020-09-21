import React from 'react';
import styled from 'styled-components';

const Copyright = () => (
  <Copy>&#169; 2017-{new Date().getFullYear()} Web Blueprint Design, LLC. All Rights Reserved</Copy>
);

export default Copyright;

const Copy = styled.p`
  align-items: center;
  background-color: #2f2f2f;
  border-top: 1px solid #fefefe;
  color: #fefefe;
  display: flex;
  font-size: 1.025rem;
  height: 8vh;
  justify-content: center;
  margin-bottom: 0;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 0.75rem;
  }
`;
