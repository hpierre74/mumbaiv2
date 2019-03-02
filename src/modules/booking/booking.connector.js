import { connect } from 'react-redux';

import Booking from './booking.component';
import { submitBooking } from './booking.action';

const mapStateToProps = ({ booking: { addBookingSuccess }, app: { config }, toaster: { visible, content } }) => ({
  config,
  isToastVisible: visible,
  toastContent: content,
  addBookingSuccess,
});

export default connect(
  mapStateToProps,
  { submitBooking },
)(Booking);
