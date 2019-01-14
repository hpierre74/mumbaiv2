import { connect } from 'react-redux';

import UserRoutes from './userRoutes.component';
import { showToast } from '../toaster/toaster.action';
import { getComponents } from './components.action';

const mapStateToProps = ({
  pageContent: {
    content: { presentation },
  },
  components,
}) => ({
  presentation,
  components,
});

export default connect(
  mapStateToProps,
  {
    showToast,
    getComponents,
  },
)(UserRoutes);
