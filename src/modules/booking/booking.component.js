import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import moment from 'moment';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Divider from '@material-ui/core/Divider';

import { Row, Col } from '../../components/grid.components';
import Confirm from '../../components/confirm.component';

import { setData, getNewKey } from '../firebase/firebase.class';
import DateInput from '../../components/datepicker.component';

moment.locale('fr-fr');

export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      firstname: '',
      lastname: '',
      persons: '',
      tel: '',
      email: '',
      date: moment(),
      hours: '',
      timestamp: null,
      modal: false,
    };
    this.state = {
      ...this.defaultState,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDateChange = date =>
    this.setState(state => ({
      date,
      timestamp: date
        .add(state.hours, 'hours')
        .add(state.minutes, 'minutes')
        .valueOf(),
    }));

  handleFileChange = e => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  toggleModal = () => {
    this.setState(state => ({ modal: !state.modal }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.toggleModal();
    const { showToast } = this.props;
    const state = omit(this.state, 'modal');
    const bookingKey = getNewKey('booker/bookings');
    const newBooking = {
      ...state,
      id: bookingKey,
      date: this.state.date.format('L'),
    };

    setData(`booker/bookings/${bookingKey}`, newBooking)
      .then(() => {
        this.setState({ ...this.defaultState });
        showToast('success', 'Booking Enregistré !');
      })
      .catch(err => showToast('error', "Oups, votre réservation n'a pas fonctionné", err));
  };

  render() {
    return (
      <Card style={{ margin: '2.5%' }}>
        <CardHeader title="Réserver une table" />
        <CardContent>
          <Row style={{ display: 'flex', justifyContent: 'center' }} container spacing={24}>
            <Col xs={12} md={6}>
              <TextField
                required
                onChange={this.handleChange}
                name="firstname"
                value={this.state.firstname}
                id="firstname"
                label="Votre prénom"
                fullWidth
              />
            </Col>
            <Col xs={12} md={6}>
              <TextField
                required
                onChange={this.handleChange}
                name="lastname"
                value={this.state.lastname}
                id="lastname"
                label="Votre nom"
                fullWidth
              />
            </Col>
            <Col xs={12} md={6}>
              <TextField
                InputLabelProps={{
                  color: 'red',
                  background: 'red',
                }}
                required
                onChange={this.handleChange}
                name="tel"
                value={this.state.tel}
                id="tel"
                label="Téléphone"
                fullWidth
              />
            </Col>
            <Col xs={12} md={6}>
              <TextField
                required
                onChange={this.handleChange}
                name="email"
                value={this.state.email}
                id="email"
                label="Email"
                fullWidth
              />{' '}
            </Col>
            <Col xs={12} md={6}>
              <Select
                value={this.state.hours}
                onChange={this.handleChange}
                input={<Input name="hours" id="hours" fullWidth />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="12:00">12:00</MenuItem>
                <MenuItem value="12:30">12:30</MenuItem>
                <MenuItem value="13:00">13:00</MenuItem>
                <MenuItem value="13:30">13:30</MenuItem>
                <Divider />
                <MenuItem value="19:00">19:00</MenuItem>
                <MenuItem value="19:30">19:30</MenuItem>
                <Divider />
                <MenuItem value="21:00">21:00</MenuItem>
                <MenuItem value="21:30">21:30</MenuItem>
                <MenuItem value="22:00">22:00</MenuItem>
              </Select>
            </Col>
            <Col xs={12} md={6}>
              <Select
                value={this.state.persons}
                onChange={this.handleChange}
                input={<Input name="persons" id="persons" fullWidth />}
              >
                <MenuItem value="" />
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </Col>
            <Col xs={12} md={6}>
              <DateInput date={this.state.date.toDate()} handleChange={this.handleDateChange} />
            </Col>
          </Row>
        </CardContent>
        <Row style={{ display: 'flex', justifyContent: 'center' }} container spacing={24}>
          <Col xs={12} md={12}>
            <Button onClick={this.toggleModal} variant="outlined" color="primary">
              Submit Event
            </Button>
          </Col>
          <Col xs={12} md={12}>
            <Confirm
              title="Confirmez-vous cette réservation ?"
              open={this.state.modal}
              onCancel={this.toggleModal}
              onSubmit={this.handleSubmit}
            />
          </Col>
        </Row>
      </Card>
    );
  }
}

EventForm.propTypes = {
  showToast: PropTypes.func.isRequired,
};
