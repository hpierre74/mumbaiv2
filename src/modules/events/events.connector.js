import { connect } from 'react-redux';

import Events from './events.component';

const mapStateToProps = ({
  pageContent: {
    content: { events },
  },
}) => ({
  events,
});

export default connect(
  mapStateToProps,
  {},
)(Events);
