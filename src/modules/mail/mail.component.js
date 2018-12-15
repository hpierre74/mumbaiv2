import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  componentDidMount() {}

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    const { sendMailToAdmin } = this.props;
    e.preventDefault();
    sendMailToAdmin(this.state);
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      object: '',
      content: '',
    });
  };

  render() {
    const { firstname, lastname, email, object, content } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Input onChange={this.handleInputChange} value={firstname} name="firstname" placeholder="your firstname" />
        <Input onChange={this.handleInputChange} value={lastname} name="lastname" placeholder="your lastname" />
        <Input
          onChange={this.handleInputChange}
          value={email}
          name="email"
          width="100%"
          placeholder="your email adress"
        />
        <Input onChange={this.handleInputChange} value={object} name="object" width="100%" placeholder="object" />
        <Textarea onChange={this.handleInputChange} value={content} name="content" />
        <Button value="Envoyer" />
      </Form>
    );
  }
}

Mail.propTypes = {
  sendMailToAdmin: PropTypes.func.isRequired,
};

export default Mail;
