import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Row, Col } from '../../../components/grid.components';
import EventForm from './eventForm.connector';
import EventEdit from './eventEdit.connector';
import EventList from './eventList.component';
import Confirm from '../../../components/confirm.component';

export default class EventManager extends Component {
  componentDidMount = () => {
    this.props.getEvents();
  };

  render() {
    const { events, selectedEvent, openEdit, updateEvent, unsetEditEvent } = this.props;

    return (
      <Row
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
        container
        spacing={24}
      >
        <Col xs={12} md={12}>
          <Row spacing={8}>
            <Col xs={12} md={5}>
              <EventForm />
            </Col>
            <Col xs={12} md={7}>
              {events ? <EventList events={events} /> : <CircularProgress />}
            </Col>
          </Row>
          <Row>
            <Col>
              <Confirm title="Edit Event" open={openEdit} onCancel={unsetEditEvent} onSubmit={updateEvent}>
                {selectedEvent ? <EventEdit /> : null}
              </Confirm>
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
  selectedEvent: PropTypes.shape({}).isRequired,
  openEdit: PropTypes.bool.isRequired,
  updateEvent: PropTypes.func.isRequired,
  unsetEditEvent: PropTypes.func.isRequired,
};
