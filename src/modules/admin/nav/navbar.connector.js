import { connect } from 'react-redux';

import NavBar from './drawer.component';

const mapStateToProps = ({ router: { location: { pathname } } }) => ({
  pathname,
});

export default connect(mapStateToProps)(NavBar);
