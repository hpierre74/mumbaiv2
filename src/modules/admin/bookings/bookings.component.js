import React, { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

import BookingsTable from './bookings.table';

moment.locale('fr');

const SectionsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  margin: 2.5%;
`;

class BookingManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      bookings: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount = () => {
    // getBookingsForDate(this.state.startDate).then(bookings => this.setState({ bookings }));
  };

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    return (
      <SectionsWrapper>
        <DatePicker
          selected={this.state.startDate}
          locale="fr-fr"
          dateFormat="DD/MM/YYYY"
          onChange={this.handleChange}
        />
        <BookingsTable bookings={this.state.bookings} />
      </SectionsWrapper>
    );
  }
}
// BookingManager.defaultProps = {
//   config: null,
// };
// BookingManager.propTypes = {
//   config: PropTypes.shape({}),
// };

export default BookingManager;
