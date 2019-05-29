import styled from 'styled-components';

export const boxShadow = {
  boxShadow: '7px 10px 12px -5px rgba(0, 0, 0, 0.56)',
};
export const ProjectLink = styled.a`
  align-items: center;
  /* background-color: #01a4e4; - original color */
  background-color: #015d84;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
  color: #fefefe;
  display: flex;
  font-size: 0.9rem;
  justify-content: center;
  letter-spacing: 0.125rem;
  padding: 25px 15px;

  &:hover {
    background-color: #fefefe;
    /* border: 1px solid #01a4e4; - original color */
    border: 1px solid #015d84;
    /* color: #01a4e4; - original color */
    color: #015d84;
  }

  @media (min-width: 1650px) {
    font-size: 1.025rem;
  }
  @media (max-width: 1510px) {
    height: 88px;
  }
  @media (max-width: 1125px) {
    font-size: 0.8rem;
  }
  @media (max-width: 767px) {
    font-size: 1.125rem;
    height: 56px;
  }
`;

export const GitLink = styled.a`
  align-items: center;
  background-color: #282828;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
  color: #fefefe;
  display: flex;
  font-size: 0.9rem;
  justify-content: center;
  letter-spacing: 0.125rem;
  padding: 25px 15px;

  &:hover {
    background-color: #fefefe;
    border: 1px solid #282828;
    color: #282828;
  }

  @media (min-width: 1650px) {
    font-size: 1.025rem;
  }
  @media (max-width: 1510px) {
    height: 88px;
  }
  @media (max-width: 1125px) {
    font-size: 0.8rem;
  }
  @media (max-width: 767px) {
    font-size: 1.125rem;
    height: 56px;
  }
`;
