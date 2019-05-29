import styled from 'styled-components';

export const Heading3 = styled.h3`
  /* color: ${props => (props.wwd ? '#6cbefc' : '#fefefe')};  - original color */
  color: ${props => (props.wwd ? '#015d84' : '#fefefe')};
  font-size: 1.25rem;
`;

export const Heading2 = styled.h2`
  /* background-color: ${props => (props.lightBG ? 'none' : '#01a4e4')};  -  original color */
  background-color: ${props => (props.lightBG ? 'none' : '#015d84')};
  border-radius: ${props => (props.lighBG ? 'none' : '7px')};
  /* color: ${props => (props.lightBG ? '#01a4e4' : '#fefefe')};  -  original colors */
  color: ${props => (props.lightBG ? '#015d84' : '#fefefe')};
  letter-spacing: 5px;
  margin-bottom: 1rem;
  padding: 10px;
  text-align: center;
  text-shadow: ${props => (props.lightBG ? '2px 2px 3px #00006740' : '2px 2px 3px #00000040')};
`;
