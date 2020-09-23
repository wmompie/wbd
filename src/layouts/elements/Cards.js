import styled from 'styled-components';

export const Card = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 30px;
`;

export const FlexItems = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-around;
  text-align: center;

  > div {
    border: 3px solid #01a4e4;
    border-radius: 10px;
    padding: 20px;
    width: 30%;

    @media (max-width: 1260px) {
      width: 100%;
    }
  }

  @media (max-width: 1260px) {
    flex-direction: column;
  }
`;

  export const CardI = styled.i`
  background-color: #01a4e4;
  border-radius: 50%;
  color: #fff;
  margin-bottom: 15px;
  padding: 1rem;
`;

export const CardH3 = styled.h3`
  font-weight: bold;
  margin-bottom: 15px;
`;

export const CardUL = styled.ul`
  list-style-type: square;

  > li {
    text-align: left;

    @media (max-width: 1260px) {
      list-style-type: none;
      text-align: center;
    }
  }
`;
