import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import moment from 'moment';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import { Row, Col } from '../../../components/grid.components';
import Confirm from '../../../components/confirm.component';

import { setFile, setData, getNewKey } from '../../firebase/firebase.class';
import DateInput from '../../../components/datepicker.component';

moment.locale('fr');

export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      title: '',
      subtitle: '',
      type: '',
      date: moment(),
      image: '',
      imageName: '',
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

  handleDateChange = date => this.setState({ date });

  handleFileChange = e => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.toggleModal();
    const { showToast } = this.props;

    setFile(`public/events/${this.state.imageName}`, this.state.image)
      .then(async success => {
        await this.setState({
          imagePath: success.metadata.fullPath,
          imageUrl: await success.ref.getDownloadURL(),
        });
        const stringFields = omit({ ...this.state, date: this.state.date.valueOf() }, ['image', 'modal', 'events']);
        const eventKey = getNewKey('public/events');
        setData(`public/events/${eventKey}`, stringFields)
          .then(() => {
            this.setState({ ...this.defaultState });
            showToast('success', 'Event successfully uploaded !');
          })
          .catch(err => showToast('error', err.message));
      })
      .catch(err => showToast('error', err.message));
  };

  render() {
    return (
      <Card style={{ margin: '2.5%' }}>
        <CardHeader title="Add event" />
        <CardContent>
          <Row style={{ display: 'flex', justifyContent: 'center' }} container spacing={24}>
            <Col xs={12} md={10}>
              <TextField
                placeholder="NYE 2018/2019, DJ Any"
                required
                onChange={this.handleChange}
                name="title"
                value={this.state.title}
                id="eventTitle"
                label="Event Title"
                fullWidth
              />
            </Col>
            <Col xs={12} md={10}>
              <TextField
                placeholder="Le 15 Janvier 2018, Art Contemporain"
                required
                onChange={this.handleChange}
                name="subtitle"
                value={this.state.subtitle}
                id="eventSubtitle"
                label="Event Subtitle"
                fullWidth
              />
            </Col>
            <Col xs={12} md={10}>
              <TextField
                placeholder="Exposition, Soirée Funk, DJ..."
                required
                onChange={this.handleChange}
                name="type"
                value={this.state.type}
                id="eventType"
                label="Event Type"
                fullWidth
              />
            </Col>
            <Col xs={12} md={10}>
              <TextField
                placeholder="your_picture.png"
                required
                onChange={this.handleChange}
                name="imageName"
                value={this.state.imageName}
                id="imageName"
                label="Image Name"
                fullWidth
              />
            </Col>

            <Col xs={12} md={10}>
              <DateInput date={this.state.date} handleChange={this.handleDateChange} />
            </Col>
            <Col xs={12} md={10}>
              <input
                required
                className="inputfile"
                id="eventImg"
                label="Event Image"
                type="file"
                name="image"
                accept="image/png, image/jpg, image/jpeg"
                onChange={this.handleFileChange}
              />
            </Col>
          </Row>
        </CardContent>
        <Row style={{ display: 'flex', justifyContent: 'center' }} container spacing={24}>
          <Col xs={12} md={12}>
            <Button onClick={this.toggleModal} variant="contained" color="primary">
              Submit Event
            </Button>
          </Col>
          <Col xs={12} md={12}>
            <Confirm
              title="Are you sure you want to save this event ?"
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
