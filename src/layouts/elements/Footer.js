import styled from 'styled-components';

export const FooterDiv = styled.div`
  align-items: center;
  background-color: #2f2f2f;
  min-height: 350px;
  padding-bottom: 3rem;
  padding-top: 3rem;
  width: 100%;
`;
export const Sitemap = styled.div`
  @media (max-width: 510px) {
    margin-top: 3rem;
  }
`;
export const SitemapHr = styled.hr`
  border: 0.5px solid #01a4e4;
  width: 5%;
  min-width: 70px;
`;
export const ContactHr = styled.hr`
  border: 0.5px solid #01a4e4;
  width: 5%;
  min-width: 150px;
`;
export const FooterLi = styled.li`
  color: #fefefe;
  font-size: 1.025rem;
  list-style: none;
  padding: 0.15rem 0.5rem;
`;
export const FooterH2 = styled.h2`
  color: #01a4e4;
  text-align: center;
  text-shadow: 2px 2px 3px #00000040;
`;
export const FooterIcon = styled.i`
  color: #01a4e4;
  padding-right: 0.5rem;
`;

export const anchorStyle = {
  cursor: 'pointer',
  color: '#fefefe',
  fontSize: '1.025rem',
  textDecoration: 'none',
};
