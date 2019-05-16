import styled, { keyframes } from 'styled-components';

const show = keyframes`
	0% {
		opacity: 0;
		z-index: 1;
  }
  49.99% {
		opacity: 0;
		z-index: 1;
	}
	50% {
		opacity: 1;
		z-index: 5;
  }
  100% {
		opacity: 1;
		z-index: 5;
	}
`;

export const Label = styled.label`
  color: #282828;
  font-size: 1rem;
  font-weight: 700;
`;

export const Form = styled.form`
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 4% 50px;
  text-align: center;

  .socials {
    height: 50%;
    padding: 0;
  }
`;

export const EmailContainer = styled.div`
  align-items: center;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;
  width: 50%;
  z-index: 1;

  @media (max-width: 576px) {
    bottom: 0;
    height: 50%;
    width: 100%;
  }
`;

export const MediaContainer = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;
  width: 50%;
  z-index: 2;

  @media (max-width: 576px) {
    bottom: 0;
    height: 50%;
    width: 100%;
  }
`;

export const OverlayContainer = styled.div`
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: transform 0.6s ease-in-out;
  width: 50%;
  z-index: 100;

  @media (max-width: 576px) {
    height: 50%;
    left: 0;
    top: 50%;
    width: 100%;
  }
`;

export const Overlay = styled.div`
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  background: -webkit-linear-gradient(to right, #01a4e4, #6cbefc);
  background: #6cbefc;
  background: linear-gradient(to right, #01a4e4, #6cbefc);
  color: #525252;
  height: 100%;
  left: -100%;
  position: relative;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 200%;

  @media (max-width: 576px) {
    height: 200%;
    left: 0;
    top: -100%;
    transform: translateY(0);
    width: 100%;
  }
`;

export const OverlayLeft = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 40px;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateX(-20%);
  transition: transform 0.6s ease-in-out;
  width: 50%;

  @media (max-width: 576px) {
    height: 50%;
    transform: translateY(-20%);
    width: 100%;
  }
`;

export const OverlayRight = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 40px;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 50%;

  @media (max-width: 576px) {
    bottom: 0;
    height: 50%;
    top: 50%;
    transform: translateY(0);
    width: 100%;
  }
`;

export const SocialContainer = styled.div`
  margin: 20px 0;

  a {
    align-items: center;
    border-radius: 50%;
    border: 1px solid #ddd;
    display: inline-flex;
    height: 40px;
    justify-content: center;
    margin: 0 5px;
    text-decoration: none;
    width: 40px;
  }
`;

export const ContactContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  margin-bottom: 5rem;
  margin-top: 3rem;
  max-width: 100%;
  max-height: 70vh;
  min-height: 520px;
  overflow: hidden;
  position: relative;
  width: 768px;

  @media (max-width: 768px) {
    border-radius: 0;
    width: 100%;
  }

  .email-active {
    animation: ${show} 0.6s;
    opacity: 1;
    transform: translateX(100%);
    z-index: 5;
  }

  .media-active {
    transform: translateX(100%);
  }

  .overlaycontainer-active {
    transform: translateX(-100%);
  }

  .overlay-active {
    transform: translateX(50%);
  }

  .overlayleft-active {
    transform: translateX(0);
  }

  .overlayright-active {
    transform: translateX(20%);
  }

  @media (max-width: 576px) {
    height: 100%;
    min-height: 1100px;

    .email-active {
      animation: ${show} 0.6s;
      opacity: 1;
      transform: translateY(100%);
      z-index: 5;
    }

    .media-active {
      transform: translateY(100%);
    }

    .overlaycontainer-active {
      transform: translateY(-100%);
    }

    .overlay-active {
      transform: translateY(50%);
    }

    .overlayleft-active {
      transform: translateY(0);
    }

    .overlayright-active {
      transform: translateY(20%);
    }
  }
`;
