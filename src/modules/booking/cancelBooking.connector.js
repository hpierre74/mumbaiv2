import { connect } from 'react-redux';

import CancelBooking from './cancelBooking.component';
import { showToast } from '../toaster/toaster.action';

const mapStateToProps = ({ toaster: { visible, content } }) => ({
  isToastVisible: visible,
  toastContent: content,
});

export default connect(
  mapStateToProps,
  { showToast },
)(CancelBooking);
