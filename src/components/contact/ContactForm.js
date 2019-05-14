import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form } from '../../elements';

import TextInputGroup from './TextInputGroup';
import TextareaGroup from './TextareaGroup';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    errors: {},
  };

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

    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
      errors: {},
    });

    await axios.post('/api/form', {
      name,
      email,
      subject,
      message,
    });
  };

  render() {
    const { name, email, subject, message, errors } = this.state;
    return (
      <Form name='contactForm' method='POST' onSubmit={this.onSubmit}>
        <TextInputGroup name='name' label='Name:' value={name} onChange={this.onChange} error={errors.name} />
        <TextInputGroup
          type='email'
          name='email'
          label='Email:'
          value={email}
          onChange={this.onChange}
          error={errors.email}
        />
        <TextInputGroup
          name='subject'
          label='Subject:'
          value={subject}
          onChange={this.onChange}
          error={errors.subject}
        />
        <TextareaGroup
          name='message'
          label='Message:'
          value={message}
          onChange={this.onChange}
          error={errors.message}
        />
        <Button type='submit'>SEND</Button>
      </Form>
    );
  }
}

export default ContactForm;
