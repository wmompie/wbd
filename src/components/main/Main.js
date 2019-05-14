import React from 'react';
import { Link } from 'react-scroll';

import { ToTop } from '../../elements';

import Navbar from '../header/Navbar';
import Header from '../header/Header';
import FirstWebsite from '../header/FirstWebsite';
import WhatWeDo from '../about/WhatWeDo';
import WhatsGreat from '../about/WhatsGreat';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Copyright from '../footer/Copyright';

const Main = () => (
  <div>
    <Link to='welcome' smooth={true} duration={900}>
      <ToTop>
        <i className='fas fa-chevron-up' />
      </ToTop>
    </Link>
    <Navbar id='welcome' />
    <Header />
    <FirstWebsite id='firstweb' />
    <WhatWeDo id='whatwedo' />
    <WhatsGreat />
    <Projects id='projects' />
    <Contact id='contact' />
    <Footer />
    <Copyright />
  </div>
);

export default Main;
