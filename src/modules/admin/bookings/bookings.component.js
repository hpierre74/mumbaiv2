import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import DatePicker from '../../../components/datepicker.component';
import BookingsTable from './bookings.table';

import { Col, Row } from '../../../components/grid.components';
import BookingsBoard from './bookingsBoard.connector';

// const action = e => console.log(e.target.value);

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
    this.props.getBookingsByService('12:00', '14:00');
  };

  handleChange(date) {
    this.setState({ startDate: date });
  }

  render() {
    return (
      <Row style={{ margin: '0 auto' }} spacing={24}>
        <Col xs={12} md={12}>
          <BookingsBoard />
        </Col>
        <Col md={12} sm={12} xs={12}>
          <BookingsTable bookings={this.props.bookings} />
        </Col>
      </Row>
    );
  }
}

BookingManager.propTypes = {
  getBookingsByService: PropTypes.func.isRequired,
  bookings: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({})]).isRequired,
};

export default BookingManager;
