import styled from 'styled-components';

export const TitleH1 = styled.h1`
  color: #2d2d2d;
  align-items: center;
  display: flex;
  font-weight: bold;
  justify-content: center;

  @media (max-width: 576px) {
    font-size: 32px;
  }
`;
export const TitleH2 = styled.h1`
  color: #2d2d2d;
  align-items: center;
  display: flex;
  font-weight: bold;
  justify-content: center;
  padding-bottom: 3rem;

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const TitleHr = styled.hr`
  border: 1px solid #01a4e4;
  width: 40%;
`;

export const buttonStyle = {
  // backgroundColor: '#01a4e4',  - original color
  backgroundColor: '#015d84',
  borderRadius: '50px',
  border: '1px solid #01a4e4',
  color: '#fefefe',
  cursor: 'pointer',
  fontSize: '1.5rem',
  padding: '10px 30px',
  textTransform: 'uppercase',
};
