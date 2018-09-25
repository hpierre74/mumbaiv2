import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';

import { Form, Input, Textarea, Button } from '../../components/form.components';

class Mail extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      object: '',
      content: '',
    };
  }

  componentDidMount() {
    console.log(this);
  }
  recaptchaLoaded() {}

  verifiedRecaptcha() {}

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.sendMailToMumbai(this.state);
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      object: '',
      content: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          onChange={this.handleInputChange}
          value={this.state.firstname}
          name="firstname"
          placeholder="your firstname"
        />
        <Input
          onChange={this.handleInputChange}
          value={this.state.lastname}
          name="lastname"
          placeholder="your lastname"
        />
        <Input
          onChange={this.handleInputChange}
          value={this.state.email}
          name="email"
          width="100%"
          placeholder="your email adress"
        />
        <Input
          onChange={this.handleInputChange}
          value={this.state.object}
          name="object"
          width="100%"
          placeholder="object"
        />
        <Textarea onChange={this.handleInputChange} value={this.state.content} name="content" />
        <Recaptcha
          sitekey="6LcnsGAUAAAAAFPpq9NnMTVYgtdQU5q8zf4McL-W"
          render="explicit"
          onloadCallback={console.log('ok')}
          verifyCallback={console.log('verified')}
          theme="dark"
        />
        <Button value="Envoyer" />
      </Form>
    );
  }
}

Mail.propTypes = {
  sendMailToMumbai: PropTypes.func.isRequired,
};

export default Mail;
