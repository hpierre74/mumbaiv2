import { connect } from 'react-redux';

import Booking from './booking.component';
import { showToast } from '../toaster/toaster.action';

const mapStateToProps = ({ app: { config }, toaster: { visible, content } }) => ({
  config,
  isToastVisible: visible,
  toastContent: content,
});

export default connect(mapStateToProps, { showToast })(Booking);
