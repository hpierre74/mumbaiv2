import { connect } from 'react-redux';

import EventManager from './events.component';
import { showToast } from '../../toaster/toaster.action';

const mapStateToProps = ({ toaster: { visible, content }, lang: { currentLang } }) => ({
  visible,
  content,
  currentLang,
});

export default connect(
  mapStateToProps,
  { showToast },
)(EventManager);
