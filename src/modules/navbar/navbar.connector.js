import { connect } from 'react-redux';

import Navbar from './navbar.component';
import { toggleNavbar } from '../app/app.action';

const mapStateToProps = ({
  app: {
    mobileOpen,
    config: { pages },
  },
}) => ({
  mobileOpen,
  pages,
});

export default connect(
  mapStateToProps,
  {
    toggle: toggleNavbar,
  },
)(Navbar);
