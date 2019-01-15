import { connect } from 'react-redux';

import BookingManager from './bookings.component';
import { getBooking, getBookingsByDate, setBoardActionType, getBookingsByService } from './bookings.action';

const mapStateToProps = ({ app: { config }, bookings: { bookings } }) => ({ config, bookings });

export default connect(
  mapStateToProps,
  {
    getBooking,
    getBookingsByDate,
    setBoardActionType,
    getBookingsByService,
  },
)(BookingManager);
