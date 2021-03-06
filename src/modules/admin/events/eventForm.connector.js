import { connect } from 'react-redux';

import EventForm from './eventForm.component';
import { setEvent } from './events.action';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { setEvent },
)(EventForm);
