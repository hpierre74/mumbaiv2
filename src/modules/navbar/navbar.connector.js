import { connect } from 'react-redux';

import Navbar from '../../components/drawer.component';
import { toggleNavbar } from '../app/app.action';

const mapStateToProps = ({ app: { mobileOpen } }) => ({
  mobileOpen,
});

export default connect(mapStateToProps, {
  toggle: toggleNavbar,
})(Navbar);
