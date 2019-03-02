import { connect } from 'react-redux';

import BookingsBoard from './bookingsBoard.component';
import { setBoardActionType } from './bookings.action';

const mapStateToProps = ({ bookings: { command } }) => ({ command });

export default connect(
  mapStateToProps,
  {
    setBoardActionType,
  },
)(BookingsBoard);
