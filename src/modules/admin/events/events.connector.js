import { connect } from 'react-redux';

import EventManager from './events.component';
import { getEvents } from './events.action';

const mapStateToProps = ({ events: { events } }) => ({ events });

export default connect(
  mapStateToProps,
  { getEvents },
)(EventManager);
