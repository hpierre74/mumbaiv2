import React, { Component } from 'react';

import { Row, Col } from '../../../components/grid.components';
import EventForm from './eventForm.connector';
import EventList from './eventList.component';

import { getData } from '../../firebase/firebase.class';

export default class EventManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount = async () => {
    const result = await getData('public/events');
    const events = result;

    this.setState({ events });
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
              {this.state.events ? <EventList events={this.state.events} /> : <p>loading...</p>}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

EventManager.propTypes = {};
