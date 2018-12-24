import { connect } from 'react-redux';

import EventCard from './eventCard.component';
import { setEvent } from './events.action';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { setEvent },
)(EventCard);
