import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { Row, Col } from '../../components/grid.components';

const EventWrapper = styled(Col)`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 400px;
  background: url(${({ url }) => url}) center no-repeat;
  background-size: cover;
  background-position-y: initial;
  overflow: hidden;
`;

const Event = styled.div`
  position: relative;
  top: 70%;
  height: 100%;
  padding: 0 1%;
  background: rgba(0, 0, 0, 0.7);
  transition: 1s ease;
  &:hover {
    top: 0%;
  }

  @media (max-width: 700px) {
    align-self: flex-end;
    text-align: center;
  }
`;

const EventType = styled.div`
  width: fit-content;
  margin-top: 2.5%;
  padding: 2%;
  background: rgba(0, 0, 0, 0.7);
`;

const EventTitle = styled.h1`
  letter-spacing: 5px;
  font-family: Signika;
`;
const EventSubTitle = styled.h3`
  color: orange;
  text-transform: uppercase;
`;

const EventText = styled.div`
  padding: 2.5%;
  text-align: justify;
`;

const EventCard = props => (
  <Row>
    <EventWrapper url={props.src}>
      <EventType>{props.type}</EventType>
      <Event>
        <EventTitle>{props.title}</EventTitle>
        <EventSubTitle>{props.date}</EventSubTitle>
        <EventText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus non nisi a maximus. Maecenas consequat
          tortor in ipsum efficitur, sit amet commodo nulla consequat. Proin tristique eros magna, et convallis nibh
          sollicitudin ut. Cras et nisi eleifend, rhoncus nibh eget, blandit ipsum.
        </EventText>
        <Button style={{ color: 'orange', borderColor: 'orange' }} variant="outlined" color="primary">
          En savoir plus
        </Button>
      </Event>
    </EventWrapper>
  </Row>
);

EventCard.propTypes = {
  type: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default EventCard;
