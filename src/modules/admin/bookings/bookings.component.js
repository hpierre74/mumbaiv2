import React, { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import DatePicker from '../../../components/datepicker.component';
import BookingsTable from './bookings.table';

const SectionsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  margin: 2.5%;
`;

class BookingManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
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
        <DatePicker date={this.state.startDate} handleChange={this.handleChange} />
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
