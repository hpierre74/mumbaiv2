import { connect } from 'react-redux';

import Presentation from './presentation.component';

const mapStateToProps = ({ pageContent: { content: { presentation } } }) => ({
  presentation,
});

export default connect(mapStateToProps)(Presentation);
