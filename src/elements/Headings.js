import styled from 'styled-components';

export const Heading5 = styled.h5`
  color: ${props => (props.wwd ? '#6cbefc' : '#fefefe')};
`;

export const Heading2 = styled.h2`
  background-color: ${props => (props.lightBG ? 'none' : '#01a4e4')};
  border-radius: ${props => (props.lighBG ? 'none' : '7px')};
  color: ${props => (props.lightBG ? '#01a4e4' : '#fefefe')};
  text-shadow: ${props => (props.lightBG ? '2px 2px 3px #00006740' : '2px 2px 3px #00000040')};

  margin-bottom: 1rem;
  padding: 10px;
  text-align: center;
`;
