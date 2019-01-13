import { connect } from 'react-redux';

import UserRoutes from './userRoutes.component';
import { showToast } from '../toaster/toaster.action';
import { getComponents } from './components.action';

const mapStateToProps = ({
  pageContent: {
    content: { presentation },
  },
  app: {
    config: { modules, pages },
  },
  components,
}) => ({
  presentation,
  components,
  modules,
  pages,
});

export default connect(
  mapStateToProps,
  { showToast, getComponents },
)(UserRoutes);
