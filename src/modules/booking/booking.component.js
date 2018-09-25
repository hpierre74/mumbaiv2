import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import Recaptcha from 'react-recaptcha';

import { Title3 } from '../../components/title.components';
import { PageWrapper as BookingPageWrapper } from '../../components/wrapper.components';
import { Form, Input, Select, Textarea, Button } from '../../components/form.components';
import _Booking, { getBookingsForDate } from './booking.class';
import { setBooking, renderBookableHours } from '../../utils/booking.utils';
/* eslint-disable no-console */

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      tel: '',
      email: '',
      persons: '',
      date: '',
      time: '',
      comment: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {};

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const booking = new _Booking(this.state, this.props.config.maxBookings);
    booking.add();
    // setBooking(this.state);
    this.setState({
      firstname: '',
      lastname: '',
      tel: '',
      email: '',
      persons: 0,
      date: '',
      time: '',
      comment: '',
    });
  };

  render() {
    return (
      <BookingPageWrapper>
        <Title3>Prendre une Réservation</Title3>
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
            value={this.state.tel}
            name="tel"
            placeholder="Votre numéro de réléphone"
          />
          <Input
            onChange={this.handleInputChange}
            value={this.state.email}
            name="email"
            placeholder="Votre adresse email"
          />
          <Input
            onChange={this.handleInputChange}
            value={this.state.persons}
            name="persons"
            placeholder="Le nombre de personnes attendues"
          />
          <Input
            type="date"
            onChange={this.handleInputChange}
            value={this.state.date}
            name="date"
            placeholder="Le jour de votre réservation"
          />
          <Select
            type="time"
            onChange={this.handleInputChange}
            value={this.state.time}
            name="time"
            placeholder="L'heure"
          >
            <option />
            {this.props.config !== null && renderBookableHours(this.props.config.services)}
          </Select>
          <Textarea
            onChange={this.handleInputChange}
            value={this.state.comment}
            name="comment"
            width="100%"
            placeholder="Allergies, bébés ..."
          />
          {/* <Recaptcha
            sitekey="6LcnsGAUAAAAAFPpq9NnMTVYgtdQU5q8zf4McL-W"
            render="implicit"
            onloadCallback={console.log('ok')}
            verifyCallback={console.log('verified')}
            theme="dark"
          /> */}
          <Button value="Envoyer" />
        </Form>
      </BookingPageWrapper>
    );
  }
}
Booking.defaultProps = {
  config: null,
};
Booking.propTypes = {
  config: PropTypes.shape({
    services: PropTypes.shape({}),
    maxBookings: PropTypes.number,
  }),
};

export default Booking;
