import React, { Component } from 'react';
import ContactForm from './ContactForm';
import styled from 'styled-components';
import {
  Background,
  Button,
  ContactContainer,
  Form,
  Heading2,
  Overlay,
  OverlayContainer,
  OverlayLeft,
  OverlayRight,
  MediaContainer,
  EmailContainer,
  SocialContainer,
} from '../../layouts/elements';
import PropTypes from 'prop-types';

const ContactBG = styled(Background)`
  background-image: url('https://res.cloudinary.com/web-blueprint-design/image/upload/e_blur:700,f_auto,o_80,q_auto/v1556157373/WBD/communication-contact-conversation-33999_bgvff0.jpg');
  min-height: 100%;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

const ContactH2 = styled(Heading2)`
  margin: 2rem auto;

  @media (min-width: 770px) {
    width: 768px;
  }
  @media (max-width: 576px) {
    width: 90%;
  }
`;

class Contact extends Component {
  state = {
    clicked: false,
  };

  handleClick = e => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { id } = this.props;
    return (
      <ContactBG id={id}>
        <ContactH2 className='display-5'>CONTACT US. WE ARE LISTENING</ContactH2>

        <ContactContainer className='container'>
          <EmailContainer className={this.state.clicked ? 'email-active' : ''}>
            <ContactForm />
          </EmailContainer>
          <MediaContainer className={this.state.clicked ? 'signin-active' : ''}>
            <Form>
              <h1>Prefer Social Media?</h1>
              <SocialContainer>
                <a href='/'>
                  <i className='fab fa-twitter' />
                </a>
                <a href='/'>
                  <i className='fab fa-behance' />
                </a>
                {/* <a href='/' className='social'>
                  <i className='fab fa-linkedin-in' />
                </a> */}
              </SocialContainer>
              <p>We'd love to hear from you! Check out our social links above.</p>
            </Form>
          </MediaContainer>
          <OverlayContainer className={this.state.clicked ? 'overlaycontainer-active' : ''}>
            <Overlay className={this.state.clicked ? 'overlay-active' : ''}>
              <OverlayLeft className={this.state.clicked ? 'overlayleft-active' : ''}>
                <h1>Contact Form</h1>
                <p>
                  Sending us an email is easy. Just fill out the form and we'll get back to you as soon as possible!
                </p>
                <Button className='ghost' onClick={this.handleClick}>
                  Social Media
                </Button>
              </OverlayLeft>
              <OverlayRight className={this.state.clicked ? 'overlayright-active' : ''}>
                <h1>Prefer To Contact Us Directly?</h1>
                <p>Click on Contact to send us an email!</p>
                <Button className='ghost btn-sm' onClick={this.handleClick}>
                  Contact
                </Button>
              </OverlayRight>
            </Overlay>
          </OverlayContainer>
        </ContactContainer>
      </ContactBG>
    );
  }
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Contact;
