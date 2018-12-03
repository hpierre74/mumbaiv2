import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EventCard = () => <p>an event</p>;

const CardContainer = styled.div`
  display: flex;
  flex-flow: row;

  @media (max-width: 700px) {
    flex-flow: column;
  }
`;

const eventsData = {
  [new Date('2018-01-01').getTime()]: {
    title: 'ok january',
  },
  [new Date('2018-05-01').getTime()]: {
    title: 'ok may',
  },
  [new Date('2018-04-01').getTime()]: {
    title: 'ok april',
  },
  [new Date('2018-03-01').getTime()]: {
    title: 'ok march',
  },
  [new Date('2018-02-01').getTime()]: {
    title: 'ok february',
  },
};

class EventList extends Component {
  renderEventCards = events => {
    const eventKeys = Object.keys(events);
    const lastEvent = eventKeys.reduce((acc, value) => Math.max(acc, value));
    console.log(events, lastEvent);
  };
  render() {
    return <CardContainer />;
  }
}

export default EventList;
