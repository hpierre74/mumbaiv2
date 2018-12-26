import { connect } from 'react-redux';

import EventForm from './eventForm.component';
import { updateEvent } from './events.action';

const mapStateToProps = ({ events: { selectedEvent } }) => ({ selectedEvent });

export default connect(
  mapStateToProps,
  { updateEvent },
)(EventForm);
