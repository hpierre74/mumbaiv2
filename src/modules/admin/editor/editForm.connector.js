import { connect } from 'react-redux';

import EditForm from './editForm.component';
import { updateContent } from './editor.action';

const mapStateToProps = () => ({});
export default connect(
  mapStateToProps,
  {
    updateContent,
  },
)(EditForm);
