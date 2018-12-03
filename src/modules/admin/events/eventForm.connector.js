import { connect } from 'react-redux';

import EventForm from './eventForm.component';
import { showToast } from '../../toaster/toaster.action';

const mapStateToProps = ({ toaster: { visible, content } }) => ({
  visible,
  content,
});

export default connect(mapStateToProps, { showToast })(EventForm);
