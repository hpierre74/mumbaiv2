import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { Row } from '../../../../components/grid.components';
/* eslint-disable no-console */
const BookingForms = ({ type, children }) => (
  <Paper style={{ padding: '16px', height: '300px' }}>
    <Typography gutterBottom component="h3" variant="h5">
      {type.toUpperCase()}
    </Typography>
    <Row>{children}</Row>
  </Paper>
);

BookingForms.defaultProps = {
  type: '',
};

BookingForms.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default BookingForms;
