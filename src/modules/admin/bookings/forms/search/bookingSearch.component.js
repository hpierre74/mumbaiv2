import React from 'react';
import Typography from '@material-ui/core/Typography';

import DatePicker from '../../../../../components/datepicker.component';
import { Col } from '../../../../../components/grid.components';
/* eslint-disable no-console */
const SearchBooking = () => (
  <Col xs={12} sm={12} md={12}>
    <Typography component="h4" variant="h6">
      Pour une date
    </Typography>
    <DatePicker date={new Date()} handleChange={e => console.log(e, 'changed')} />
  </Col>
);

export default SearchBooking;
