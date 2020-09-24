import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import {
  anchorStyle,
  ContactHr,
  FooterDiv,
  FooterH2,
  FooterIcon,
  FooterLi,
  SalesLink,
  Sitemap,
  SitemapHr,
} from '../../layouts/elements';

const Footer = () => (
  <FooterDiv>
    <div className='row justify-content-around mx-0'>
      <Sitemap className='order-2 order-md-1'>
        <FooterH2 className='display-5'>SITEMAP</FooterH2>
        <SitemapHr className='my-1' />

        <ul className='text-light mt-4'>
          <FooterLi>
            <ScrollLink to='welcome' smooth={true} duration={900} style={anchorStyle}>
              Welcome
            </ScrollLink>
          </FooterLi>
          <FooterLi>
            <ScrollLink to='whatwedo' smooth={true} offset={-40} duration={900} style={anchorStyle}>
              What We Do
            </ScrollLink>
          </FooterLi>
          <FooterLi>
            <ScrollLink to='services' smooth={true} offset={-40} duration={900} style={anchorStyle}>
              Services
            </ScrollLink>
          </FooterLi>
          <FooterLi>
            <ScrollLink to='contact' smooth={true} duration={900} style={anchorStyle}>
              Contact Us
            </ScrollLink>
          </FooterLi>
          <FooterLi>
            <Link to='/terms' target='_blank' style={anchorStyle}>
              Terms and Conditions
            </Link>
          </FooterLi>
          <FooterLi>
            <Link to='/privacy' target='_blank' style={anchorStyle}>
              Privacy Policy
            </Link>
          </FooterLi>
        </ul>
      </Sitemap>

      <div className='order-1 order-md-2'>
        <FooterH2 className='display-5'>WHERE TO FIND US</FooterH2>
        <ContactHr className='my-1' />
        <div className='mt-4'>
          <ul>
            <FooterLi>
              <FooterIcon className='fas fa-home' /> Web Blueprint Design,
            </FooterLi>
            <FooterLi style={{ paddingLeft: '2.5rem' }}>Fort Lauderdale, FL</FooterLi>
            <FooterLi>
              <FooterIcon className='fas fa-phone-volume' /> &#40;754&#41; 900-4223
            </FooterLi>
            <FooterLi>
              <FooterIcon className='far fa-envelope' />
              <SalesLink href='mailto:sales@webblueprintdesign.com'>sales&#64;webblueprintdesign.com</SalesLink>
            </FooterLi>
          </ul>
        </div>
      </div>
    </div>
  </FooterDiv>
);

export default Footer;
