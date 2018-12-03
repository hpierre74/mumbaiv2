import { connect } from 'react-redux';

import Admin from './admin.component';

const mapStateToProps = ({ router: { location: { pathname } } }) => ({
  pathname,
});

export default connect(mapStateToProps)(Admin);
