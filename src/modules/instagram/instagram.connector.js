import { connect } from 'react-redux';

import Instagram from './instagram.component';
import { getInstagramFeed } from './instagram.action';

const mapStateToProps = ({ instagram: { feed, enabled } }) => ({
  feed,
  enabled,
});

export default connect(
  mapStateToProps,
  { getInstagramFeed },
)(Instagram);
