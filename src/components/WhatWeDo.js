import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Heading2, Heading5 } from '../layouts/elements';

const WWDHeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const blue = {
  color: '#01a4e4',
};

const WhatWeDo = ({ id }) => (
  <div className='container-fluid my-5' id={id}>
    <WWDHeadingContainer>
      <div className='col-12 col-md-10 col-lg-8 col-xl-6'>
        <Heading2 lightBG className='display-5'>
          WHAT WE DO
        </Heading2>
      </div>
    </WWDHeadingContainer>
    <div className='row justify-content-around my-5'>
      <section className='col-12 col-xl-3 pb-5'>
        <Heading5 wwd>MAINTENANCE</Heading5>
        <p>
          You change the oil in your car. You get a haircut when you’re feeling shaggy. Heck, you even visit the dentist
          every so often. But, are you maintaining your website properly? If you want to maximize your return on
          investment and get the most out of your website you need to implement a monthly website maintenance plan. This
          is where we can come and help. We cover areas such as website backups, software updates, checking for broken
          links, additional content for the website to be added, site speed, search engine optimization, analytics, spam
          and much more.
        </p>
      </section>
      <section className='col-12 col-xl-3 pb-5'>
        <Heading5 wwd>RESPONSIVE DESIGN</Heading5>
        <p>
          Responsive Design is the approach that suggests that design and development should respond to the user’s
          behavior and environment based on screen size, platform and orientation. The practice consists of a mix of
          flexible grids and layouts, images and an intelligent use of CSS media queries. As the user switches from
          their laptop to mobile, the website should automatically switch to accommodate for resolution, image size and
          scripting abilities. In other words, the website should have the technology to automatically respond to the
          user’s preferences.
        </p>
      </section>
      <section className='col-12 col-xl-3 pb-5'>
        <Heading5 wwd>IDEAS &#38; CONCEPTS</Heading5>
        <p>
          Design isn’t just visual, it isn’t just the façade; it’s the personality beneath. Design is the entire
          experience from the moment users enter your site to well after they’ve left. Storyboards visually map out the
          design in static comic book-like images. You probably know this already from movies –{' '}
          <a
            href='http://www.youtube.com/watch?v=7LKPVAIcDXY&t=4s'
            target='_blank'
            rel='noopener noreferrer'
            style={blue}
          >
            here’s the Pixar team explaining it
          </a>
          . Why is it important? It’s a way of planning before executing, it makes changes much easier and it’s a good
          way for you to be involved in the production process. We would love to bring your ideas to the web.
        </p>
      </section>
    </div>
  </div>
);

WhatWeDo.propTypes = {
  id: PropTypes.string.isRequired,
};

export default WhatWeDo;
