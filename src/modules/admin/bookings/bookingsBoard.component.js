import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, MenuList, Paper, Typography, InputLabel } from '@material-ui/core';

import { Col, Row } from '../../../components/grid.components';
import BookingForms from './forms/bookingsForms.component';
import SearchBooking from './forms/search/bookingSearch.component';
import DatePicker from '../../../components/datepicker.component';
/* eslint-disable no-console */

const BoardOptions = ({ setBoardActionType, type }) => (
  <Paper>
    <MenuList style={{ height: '300px' }}>
      <MenuItem selected={type === 'search'} onClick={setBoardActionType('search')}>
        Chercher
      </MenuItem>
      <MenuItem selected={type === 'interrupt'} onClick={setBoardActionType('interrupt')}>
        Interrompre
      </MenuItem>
      <MenuItem selected={type === 'book'} onClick={setBoardActionType('book')}>
        Réserver
      </MenuItem>
      <MenuItem selected={type === 'contact'} onClick={setBoardActionType('contact')}>
        Contacter
      </MenuItem>
      <MenuItem selected={type === 'settings'} onClick={setBoardActionType('settings')}>
        Paramètrer
      </MenuItem>
    </MenuList>
  </Paper>
);

BoardOptions.propTypes = {
  setBoardActionType: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

const BoardActionInterface = ({ type }) => {
  switch (type) {
    case 'search':
      return <SearchBooking />;

    case 'interrupt':
      return (
        <Col xs={12} sm={12} md={12}>
          <Typography component="h4" variant="h6">
            Pour une date
          </Typography>
          <DatePicker date={new Date()} handleChange={e => console.log(e, 'changed')} />
          <Typography component="h4" variant="h6">
            Pour plusieurs dates
          </Typography>
          <DatePicker date={new Date()} handleChange={e => console.log(e, 'changed')} />
          <DatePicker date={new Date()} handleChange={e => console.log(e, 'changed')} />
        </Col>
      );

    case 'book':
      return (
        <Col xs={12} sm={12} md={12}>
          <Typography component="h4" variant="h6">
            Pour une date
          </Typography>
          <DatePicker date={new Date()} handleChange={e => console.log(e, 'changed')} />
        </Col>
      );

    case 'contact':
      return (
        <Col xs={12} sm={12} md={12}>
          <Typography component="h4" variant="h6">
            Input: Adresse email
          </Typography>
          <Typography component="p">Input: message</Typography>
        </Col>
      );

    case 'settings':
      return (
        <Col xs={12} sm={12} md={12}>
          <Typography component="h4" variant="h6">
            Personnes maximales / service
          </Typography>
          <Typography component="h4" variant="h6">
            Personnes maximales / table
          </Typography>
          <Typography component="h4" variant="h6">
            Heures de réservations
          </Typography>
        </Col>
      );

    default:
      return <p>That might be an error</p>;
  }
};

const BookingsBoard = ({ command, setBoardActionType }) => (
  <Row spacing={24} style={{ margin: '0 auto' }}>
    <Col xs={12} md={4}>
      <BoardOptions type={command} setBoardActionType={setBoardActionType} />
    </Col>
    <Col xs={12} md={7}>
      <BookingForms type={command}>
        <BoardActionInterface type={command} />
      </BookingForms>
    </Col>
  </Row>
);

BookingsBoard.propTypes = {
  setBoardActionType: PropTypes.func.isRequired,
  command: PropTypes.string.isRequired,
};

export default BookingsBoard;
