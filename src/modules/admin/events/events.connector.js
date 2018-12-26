import { connect } from 'react-redux';

import EventManager from './events.component';
import { getEvents, unsetEditEvent, updateEvent } from './events.action';

const mapStateToProps = ({ events: { events, selectedEvent, openEdit } }) => ({
  events,
  selectedEvent,
  openEdit,
});

export default connect(
  mapStateToProps,
  { getEvents, unsetEditEvent, updateEvent },
)(EventManager);
