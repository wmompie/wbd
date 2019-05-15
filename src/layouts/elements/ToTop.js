import styled from 'styled-components';

export const ToTop = styled.span`
  align-items: center;
  background-color: #282828;
  border-radius: 50%;
  border: 2px solid #fefefe;
  bottom: 30px;
  box-sizing: border-box;
  color: #fefefe;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  opacity: 0.7;
  position: fixed;
  right: 30px;
  transition: opacity 0.6s ease-in-out;
  width: 40px;
  z-index: 999;

  &:hover {
    background-color: #01a4e4;
  }
`;
