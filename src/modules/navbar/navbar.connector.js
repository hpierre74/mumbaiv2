import { connect } from 'react-redux';

import Navbar from './navbar.component';
import { toggleNavbar } from '../app/app.action';
import renderOrNothing from '../../components/renderOrNothing.hoc';

const mapStateToProps = ({
  app: {
    mobileOpen,
    config: { pages, name },
  },
  router: {
    location: { pathname },
  },
}) => ({
  mobileOpen,
  pages,
  name,
  isUser: !pathname.includes('admin'),
});

export default connect(
  mapStateToProps,
  {
    toggle: toggleNavbar,
  },
)(renderOrNothing(({ isUser }) => isUser, Navbar));
