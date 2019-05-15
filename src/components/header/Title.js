import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

import { TitleH1, TitleH2, TitleHr, buttonStyle } from '../../layouts/elements';

const Title = ({ mainHead, subHead }) => (
  <div className='jumbotron text-center' style={{ background: 'none' }}>
    <TitleH1 className='display-4'>{mainHead}</TitleH1>
    <TitleHr className='my-1' />
    <TitleH2 className='display-5'>{subHead}</TitleH2>
    <Link to='firstweb' smooth={true} duration={900} style={buttonStyle}>
      Learn more
    </Link>
  </div>
);

Title.defaultProps = {
  mainHead: 'Welcome to Web Blueprint Design',
  subHead: 'We create simple web solutions',
};

Title.propTypes = {
  mainHead: PropTypes.string.isRequired,
  subHead: PropTypes.string.isRequired,
};

export default Title;
