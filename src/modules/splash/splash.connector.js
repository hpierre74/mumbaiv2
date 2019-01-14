import { connect } from 'react-redux';

import Splash from './splash.component';
import { showSplash } from './splash.action';

const mapStateToProps = ({ app: { splash, splashed, initialized } }) => ({
  splash,
  initialized,
  splashed,
});

export default connect(
  mapStateToProps,
  { showSplash },
)(Splash);
