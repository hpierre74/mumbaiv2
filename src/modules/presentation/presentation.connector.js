import { connect } from 'react-redux';

import Presentation from './presentation.component';
import { showToast } from '../toaster/toaster.action';

const mapStateToProps = ({
  pageContent: {
    content: { presentation },
  },
}) => ({
  presentation,
});

export default connect(
  mapStateToProps,
  { showToast },
)(Presentation);
