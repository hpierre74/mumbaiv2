import { connect } from 'react-redux';

import { sendMail } from './mail.actions';
import Mail from './mail.component';

const mapStateToProps = ({ mail: { sendMailSuccess, sendMailPending } }) => ({
  sendMailPending,
  sendMailSuccess,
});

export default connect(mapStateToProps, {
  sendMailToMumbai: sendMail,
})(Mail);
