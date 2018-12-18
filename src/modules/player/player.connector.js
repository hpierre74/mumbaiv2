import { connect } from 'react-redux';

import Player from './player.component';
import renderOrNothing from '../../components/renderOrNothing.hoc';

const mapStateToProps = ({
  pageContent: {
    content: { video },
  },
}) => ({
  video,
});

export default connect(mapStateToProps)(renderOrNothing(({ video }) => video, Player));
