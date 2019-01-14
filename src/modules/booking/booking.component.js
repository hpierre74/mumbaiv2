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
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import DateInput from '../../components/datepicker.component';
import Confirm from '../../components/confirm.component';
import { Row, Col } from '../../components/grid.components';
import { setData, getNewKey } from '../../utils/firebase.utils';

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
      date: moment().toDate(),
      hours: '',
      timestamp: null,
      modal: false,
    };
    this.state = { ...this.defaultState };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  dateWithTime = ({ date, hours }) =>
    moment(date)
      .set({
        hours: parseInt(hours.substring(0, 2), 10),
        minutes: parseInt(hours.substring(3, 5), 10),
      })
      .toDate();

  handleDateChange = date => {
    this.setState({ date });
  };

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
      date: this.dateWithTime({ ...this.state }),
    };

    setData(`booker/bookings/${bookingKey}`, newBooking)
      .then(() => {
        this.setState({ ...this.defaultState });
        showToast('success', 'Booking Enregistré !');
      })
      .catch(err => showToast('error', "Oups, votre réservation n'a pas fonctionné", err));
  };

  getBookableHours = services =>
    Object.values(services)
      .filter(service => service.bookableHours)
      .map(service => Object.values(service.bookableHours))
      .reduce((acc, curr) =>
        [...acc, ...curr].sort((a, b) => parseInt(a.replace(':', ''), 10) - parseInt(b.replace(':', ''), 10)),
      );

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
        <CardHeader component="h3" title="Réserver une table" />
        <CardContent>
          <Row
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
            container
            spacing={24}
          >
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
              <DateInput date={this.state.date} handleChange={this.handleDateChange} />
            </Col>
          </Row>
        </CardContent>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
          container
          spacing={24}
        >
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
              <List>
                <ListItemText>
                  <Typography color="secondary">
                    {`Vous êtes Mr. ${this.state.firstname} ${this.state.lastname}`}
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography color="secondary">{`Vous êtes joignable au ${this.state.tel}`}</Typography>
                </ListItemText>
                <ListItemText>
                  <Typography gutterBottom color="secondary" component="p">
                    {`Vous réservez pour ${this.state.persons}, le  ${moment(this.state.date).format(
                      'DD-MM-YYYY HH:mm',
                    )}`}
                  </Typography>
                </ListItemText>
              </List>
            </Confirm>
          </Col>
        </Row>
      </Card>
    );
  }
}

EventForm.propTypes = {
  showToast: PropTypes.func.isRequired,
  config: PropTypes.shape({
    pages: PropTypes.shape({}),
    services: PropTypes.shape({}),
  }).isRequired,
};
