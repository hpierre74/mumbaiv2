import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from '../../../components/grid.components';
import EventForm from './eventForm.connector';
import EventList from './eventList.component';

export default class EventManager extends Component {
  componentDidMount = () => {
    this.props.getEvents();
  };

  render() {
    return (
      <Row style={{ display: 'flex', justifyContent: 'center' }} container spacing={24}>
        <Col xs={12} md={12}>
          <Row spacing={8}>
            <Col xs={12} md={5}>
              <EventForm />
            </Col>
            <Col xs={12} md={7}>
              {this.props.events ? <EventList events={this.props.events} /> : <p>loading...</p>}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

EventManager.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.shape({}).isRequired,
};
