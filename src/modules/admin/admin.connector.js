import { connect } from 'react-redux';

import Admin from './admin.component';
import { configInitAdmin } from './admin.action';
import { logout } from '../auth/auth.action';

const mapStateToProps = ({
  router: {
    location: { pathname },
  },
  admin: { config, isAdmin },
}) => ({
  pathname,
  config,
  isAdmin: !!isAdmin,
});

export default connect(
  mapStateToProps,
  {
    configInitAdmin,
    logout,
  },
)(Admin);
