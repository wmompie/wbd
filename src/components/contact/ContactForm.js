import React, { Component } from 'react';
import { Button, Form, Heading5 } from '../../layouts/elements';

import TextInputGroup from './TextInputGroup';
import TextareaGroup from './TextareaGroup';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      errors: {},
      success: false,
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async e => {
    e.preventDefault();
    const { name, email, subject, message } = this.state;

    // check for errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }
    if (subject === '') {
      this.setState({ errors: { subject: 'Subject is required' } });
      return;
    }
    if (message === '') {
      this.setState({ errors: { message: 'Message is required' } });
      return;
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => this.setState({ success: true }))
      .catch(error => alert(error));

    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
      errors: {},
    });
  };

  render() {
    const { name, email, subject, message, errors, success } = this.state;
    return (
      <div>
        {success ? (
          <div className='alert alert-success' role='alert'>
            <button type='button' className='close' data-dismiss='alert' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
            <strong>Success!</strong> You're email has been submitted!
          </div>
        ) : null}
        <Form name='contact' method='POST' onSubmit={this.onSubmit}>
          <Heading5 wwd>Web Blueprint Design Contact Form</Heading5>
          <input type='hidden' name='form-name' value='contact' />
          <TextInputGroup name='name' label='Name' value={name} onChange={this.onChange} error={errors.name} />
          <TextInputGroup
            type='email'
            name='email'
            label='Email'
            value={email}
            onChange={this.onChange}
            error={errors.email}
          />
          <TextInputGroup
            name='subject'
            label='Subject'
            value={subject}
            onChange={this.onChange}
            error={errors.subject}
          />
          <TextareaGroup
            name='message'
            label='Message'
            value={message}
            onChange={this.onChange}
            error={errors.message}
          />
          <Button type='submit'>SEND</Button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
