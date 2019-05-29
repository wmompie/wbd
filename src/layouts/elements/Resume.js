import styled from 'styled-components';

export const ResumeDiv = styled.div`
  border-radius: 5px;
  border: 1px solid #01a4e4;
  box-shadow: 5px 5px 15px;
  color: #525252;
  font-family: 'Montserrat', sans-serif;
  line-height: 150%;
  margin: 3rem 15rem;

  @media (max-width: 1400px) {
    margin: 3rem 10rem;
  }
  @media (max-width: 992px) {
    margin: 3rem 5rem;
  }
  @media (max-width: 576px) {
    margin: 1rem 2rem;
  }
`;

export const ResumeHr = styled.hr`
  color: #eee;
  border: 0.5px solid #eee;
`;

export const ResumeH1 = styled.h1`
  color: #007c83;
  font-size: 2.5rem;
  font-weight: 900;
`;

export const ResumeH2 = styled.h2`
  color: #007c83;
  font-size: 2rem;
  font-weight: 400;
`;

export const ResumeH3 = styled.h3`
  color: #525252;
  font-size: 2rem;
  font-weight: 700;
  text-align: ${props => (props.primary ? 'left' : 'center')};
`;

export const ResumeH4 = styled.h4`
  font-size: ${props => (props.primary ? '1rem' : '1.5rem')};
  font-weight: ${props => (props.primary ? '700' : '400')};
`;

export const ContactContainer = styled.div`
  align-items: start;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const SummaryContainer = styled.div`
  margin-top: 2rem;
`;

export const SkillsContainer = styled(ContactContainer)`
  justify-content: space-evenly;
  margin-top: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 575px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const ExpContainer = styled(ContactContainer)`
  justify-content: flex-start;
  margin-top: 1rem;
`;

export const EduContainer = styled(ContactContainer)`
  justify-content: flex-start;
  margin-top: 1rem;
`;

export const ContactSection = styled.div`
  margin-left: ${props => (props.primary ? '15px' : '0')};
  margin-right: ${props => (props.primary ? '15px' : '0')};
  @media (max-width: 805px) {
    width: 100%;
  }
`;

export const ResumeUL = styled.ul`
  line-height: 175%;
  list-style: none;
  padding-left: 0;
`;

export const ContactLI = styled.li`
  padding-left: 1.75rem;
`;

export const FontIcon = styled.i`
  color: #007c83;
`;

export const Anchor = styled.a`
  /* color: #01a4e4; - original color */
  color: #015d84;
  text-decoration: underline;

  &:hover {
    color: blue;
  }
`;
