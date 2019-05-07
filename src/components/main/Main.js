import React, { Component } from 'react';

import Navbar from '../header/Navbar';
import Header from '../header/Header';
import FirstWebsite from '../header/FirstWebsite';
import WhatWeDo from '../about/WhatWeDo';
import WhatsGreat from '../about/WhatsGreat';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Copyright from '../footer/Copyright';

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <FirstWebsite />
        <WhatWeDo />
        <WhatsGreat />
        <Projects />
        <Contact />
        <Footer />
        <Copyright />
      </div>
    );
  }
}

export default Main;
