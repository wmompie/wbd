import React from 'react';
import { Link } from 'react-scroll';

import { ToTop } from '../layouts/elements';

import Navbar from '../components/header/Navbar';
import Header from '../components/header/Header';
import FirstWebsite from '../components/header/FirstWebsite';
import WhatWeDo from '../components/WhatWeDo';
import WhatsGreat from '../components/WhatsGreat';
import Pricing from '../components/price/Pricing';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Copyright from '../components/footer/Copyright';

const Main = () => (
  <div role='main'>
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
    <Pricing id='pricing' />
    <Contact id='contact' />
    <Footer />
    <Copyright />
  </div>
);

export default Main;
