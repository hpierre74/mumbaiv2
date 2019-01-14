import { connect } from 'react-redux';

import EventCard from './eventCard.component';
import { setEvent, deleteEvent, setEditEvent } from './events.action';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {
    setEvent,
    deleteEvent,
    setEditEvent,
  },
)(EventCard);
