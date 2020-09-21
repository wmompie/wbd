import React from 'react';
import Bullet from './Bullet';
import styled from 'styled-components';
import { Heading2, Background } from '../layouts/elements';

const WhatsGreat = () => (
  <WhatsGreatContainer>
    <div className='container-fluid'>
      <div className='row text-center justify-content-center justify-content-lg-end mt-5 pr-lg-5'>
        <div className='col-12 col-md-10 col-lg-8 col-xl-6 mt-5'>
          <Heading2 className='display-5'>WHAT'S SO GREAT ABOUT OUR WEBSITES?</Heading2>
          <Lead className='lead'>
            You will gain credibility, it will save you money, it will keep your viewers informed and it is always
            accessible. It's an internet world and the world is on the internet, so why aren't you? Let us bring your
            ideas to the web.
          </Lead>
          <div className='row mb-5'>
            <Bullet heading='OPTIMIZED USABILITY' />
            <Bullet heading='RESPONSIVE DESIGN' />
            <Bullet heading='FLEXIBLE CONTENT' />
          </div>
        </div>
      </div>
    </div>
  </WhatsGreatContainer>
);

export default WhatsGreat;

const WhatsGreatContainer = styled(Background)`
  background-image: url('https://res.cloudinary.com/web-blueprint-design/image/upload/c_scale,e_blur:300,f_auto,q_auto,w_1920/v1557356669/WBD/right-arrow_italdz.jpg');
  background-position: center;
  font-weight: bold;
  min-height: 700px;
  padding-top: 0.25rem;
`;

const Lead = styled.p`
  margin: 3rem 0;
  padding: 3rem 0;
`;
