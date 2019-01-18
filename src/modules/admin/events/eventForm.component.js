import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import { Row, Col } from '../../../components/grid.components';
import Confirm from '../../../components/confirm.component';
import DateInput from '../../../components/datepicker.component';

export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      title: '',
      subtitle: '',
      type: '',
      date: new Date(),
      image: '',
      imageName: '',
      imagePath: '',
      imageUrl: '',
      key: '',
      modal: false,
    };
    this.state = { ...this.defaultState };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount = () => {};

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleDateChange = date => this.setState({ date });

  handleFileChange = e => this.setState({ [e.target.name]: e.target.files[0] });

  toggleModal = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.toggleModal();
    const { setEvent } = this.props;

    setEvent(omit(this.state, ['modal', 'events']));
  };

  render() {
    const { imageName, date, title, subtitle, type, modal } = this.state;

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
                value={title}
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
                value={subtitle}
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
                value={type}
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
                value={imageName}
                id="imageName"
                label="Image Name"
                fullWidth
              />
            </Col>

            <Col xs={12} md={10}>
              <DateInput date={date} handleChange={this.handleDateChange} />
            </Col>
            <Col xs={12} md={10}>
              <input
                required
                className="inputfile"
                id="eventImg"
                label="Event Image"
                type="file"
                name="image"
                accept="image/png, image/jpg, image/jpeg, image/webp"
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
              open={modal}
              onCancel={this.toggleModal}
              onSubmit={this.handleSubmit}
            />
          </Col>
        </Row>
      </Card>
    );
  }
}

EventForm.propTypes = { setEvent: PropTypes.func.isRequired };
