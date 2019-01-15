import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import setMinutes from 'date-fns/setMinutes';
import setHours from 'date-fns/setHours';
import format from 'date-fns/format';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import DateInput from '../../components/datepicker.component';
import Confirm from '../../components/confirm.component';
import { Row, Col } from '../../components/grid.components';
import { setSeconds } from 'date-fns/esm';

export default class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      firstname: '',
      lastname: '',
      persons: '',
      tel: '',
      email: '',
      date: new Date(),
      hours: '',
      timestamp: null,
      modal: false,
    };
    this.state = { ...this.defaultState };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.addBookingSuccess && this.props.addBookingSuccess) {
      this.setState({ ...this.defaultState });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  dateWithTime = ({ date, hours }) => {
    const dateWithMinutes = setMinutes(new Date(date), parseInt(hours.substring(3, 5), 10));
    const dateWithHours = setHours(new Date(dateWithMinutes), parseInt(hours.substring(0, 2), 10));
    const dateWithSeconds = setSeconds(new Date(dateWithHours), 0);

    return dateWithSeconds;
  };

  handleDateChange = date => {
    this.setState({ date });
  };

  handleFileChange = e => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  toggleModal = () => {
    this.setState(state => ({ modal: !state.modal }));
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.toggleModal();
    const { submitBooking } = this.props;
    const date = this.dateWithTime(this.state);
    const timestamp = date.getTime();
    const currentTimestamp = Date.now();
    const booking = {
      ...omit(this.state, 'modal'),
      date: date.toString(),
      timestamp,
      currentTimestamp,
    };

    await submitBooking(booking);
  };

  getBookableHours = services =>
    Object.values(services)
      .filter(service => service.bookableHours)
      .map(service => Object.values(service.bookableHours))
      .reduce((acc, curr) =>
        [...acc, ...curr].sort((a, b) => parseInt(a.replace(':', ''), 10) - parseInt(b.replace(':', ''), 10)),
      );

  renderPersonsChoice = ({ book: { maxPersons } }) => {
    return Array.apply(null, Array(maxPersons)).map((n, i) => (
      <MenuItem key={i} value={++i}>
        {i}
      </MenuItem>
    ));
  };

  renderServiceChoice = services => {
    if (services) {
      return this.getBookableHours(services).map(service => (
        <MenuItem key={service} value={`${service}`}>
          {service}
        </MenuItem>
      ));
    }

    return null;
  };

  render() {
    return (
      <Card style={{ margin: '2.5%' }}>
        <CardHeader color="secondary" component="h3" title="Réserver une table" />
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
              <InputLabel style={{ display: 'flex' }} htmlFor="hours">
                Heure de la réservation
              </InputLabel>
              <Select
                value={this.state.hours}
                onChange={this.handleChange}
                input={<Input name="hours" id="hours" fullWidth />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {this.renderServiceChoice(this.props.config.services)}
              </Select>
            </Col>
            <Col xs={12} md={6}>
              <InputLabel style={{ display: 'flex' }} htmlFor="persons">
                Nombre de personnes
              </InputLabel>
              <Select
                value={this.state.persons}
                onChange={this.handleChange}
                input={<Input name="persons" id="persons" fullWidth />}
              >
                <MenuItem value="" />
                {this.renderPersonsChoice(this.props.config.modules)}
              </Select>
            </Col>
            <Col xs={12} md={6}>
              <DateInput date={this.state.date} handleChange={this.handleDateChange} />
            </Col>
          </Row>
        </CardContent>
        <Row style={{ display: 'flex', justifyContent: 'center' }} container spacing={24}>
          <Col xs={12} md={12}>
            <Button onClick={this.toggleModal} variant="outlined" color="primary">
              Réserver
            </Button>
          </Col>
          <Col xs={12} md={12}>
            <Confirm
              title="Confirmez-vous cette réservation ?"
              open={this.state.modal}
              onCancel={this.toggleModal}
              onSubmit={this.handleSubmit}
            >
              {this.state.modal && (
                <List>
                  <ListItemText>
                    <Typography>{`Vous êtes Mr. ${this.state.firstname} ${this.state.lastname}`}</Typography>
                  </ListItemText>
                  <ListItemText>
                    <Typography>{`Vous êtes joignable au ${this.state.tel}`}</Typography>
                  </ListItemText>
                  <ListItemText>
                    <Typography gutterBottom component="p">
                      {`Vous réservez pour ${this.state.persons}, le  ${format(
                        new Date(this.dateWithTime(this.state)),
                        'dd-MM-yyyy HH:mm',
                      )}`}
                    </Typography>
                  </ListItemText>
                </List>
              )}
            </Confirm>
          </Col>
        </Row>
      </Card>
    );
  }
}

BookingForm.propTypes = {
  submitBooking: PropTypes.func.isRequired,
  addBookingSuccess: PropTypes.bool.isRequired,
  config: PropTypes.shape({
    modules: PropTypes.shape({}),
    pages: PropTypes.shape({}),
    services: PropTypes.shape({}),
  }).isRequired,
};
