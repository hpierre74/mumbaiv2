import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from '../../../components/grid.components';
import EventCard from './eventCard.connector';

const EventList = props => {
  const renderEvents = events =>
    Object.values(events).map(event => (
      <Col xs={12} md={6} key={event.key}>
        <EventCard name={event.key} data={event} title={event.title} src={event.imageUrl} />
      </Col>
    ));

  return (
    <Col xs={12} md={12}>
      <Row>{renderEvents(props.events)}</Row>
    </Col>
  );
};

EventList.propTypes = { events: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]).isRequired };

export default EventList;
