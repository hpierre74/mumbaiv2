import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import DatePicker from '../../../components/datepicker.component';
import BookingsTable from './bookings.table';

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
      <div>
        <DatePicker date={this.state.startDate} handleChange={this.handleChange} />
        <BookingsTable bookings={this.state.bookings} />
      </div>
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
