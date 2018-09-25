import { connect } from 'react-redux';

import BookingManager from './bookings.component';

const mapStateToProps = ({ app: { config } }) => ({
  config,
});

export default connect(mapStateToProps)(BookingManager);
