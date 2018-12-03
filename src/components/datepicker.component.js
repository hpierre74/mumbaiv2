import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '@material-ui/core/Input';

const DateInput = props => (
  <DatePicker
    customInput={<Input name="date" id="date" fullWidth />}
    selected={props.date}
    locale="fr-fr"
    dateFormat="DD/MM/YYYY"
    onChange={props.handleChange}
  />
);

DateInput.propTypes = {
  date: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DateInput;
