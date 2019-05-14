import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #fefefe;
  background-color: #01a4e4;
  color: #fefefe;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  .ghost {
    background-color: transparent;
    border-color: #525252;
  }
`;

export const Sale = styled.button`
  background-image: url('https://res.cloudinary.com/web-blueprint-design/image/upload/f_auto,o_100,q_auto/v1556248271/WBD/background-black-colors-952670_f0ylor.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  border: 1px solid #000;
  color: #fff;
  cursor: pointer;
  font-size: 1.25rem;
  height: 100px;
  margin-top: 4rem;
  max-width: 390px;
  padding-left: 25px;
  padding-right: 25px;
`;
