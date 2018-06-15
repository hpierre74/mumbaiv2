import { connect } from 'react-redux';

import Presentation from './presentation.component';

const mapStateToProps = ({ firebase: { content: { presentation } } }) => ({
  presentation,
});

export default connect(mapStateToProps)(Presentation);
