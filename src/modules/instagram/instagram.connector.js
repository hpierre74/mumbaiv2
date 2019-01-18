import { connect } from 'react-redux';

import Instagram from './instagram.component';
import { getInstagramFeed } from './instagram.action';

const mapStateToProps = ({ instagram: { initialized, accessToken, feed, enabled } }) => ({
  initialized,
  accessToken,
  feed,
  enabled,
});

export default connect(
  mapStateToProps,
  { getInstagramFeed },
)(Instagram);
