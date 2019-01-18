import { connect } from 'react-redux';

import Instagram from './instagram.component';
import { getInstagramFeed } from './instagram.action';

const obj = {};

const mapStateToProps = ({
  app: {
    config: { modules },
    instagramed,
  },
  pageContent: { content },
}) => ({
  instagramed,
  instagram: modules.instagram || obj,
  content,
});

export default connect(
  mapStateToProps,
  { getInstagramFeed },
)(Instagram);
