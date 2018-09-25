import { connect } from 'react-redux';

import Booking from './booking.component';

const mapStateToProps = ({ app: { config } }) => ({
  config,
});

export default connect(mapStateToProps)(Booking);
