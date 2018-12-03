import { connect } from 'react-redux';

import Editor from './editor.component';
import { getPageContent } from '../../pageContentManager/pageContent.action';

const mapStateToProps = ({ config, pageContent: { content, path } }) => ({
  config,
  content,
  path,
});

export default connect(mapStateToProps, {
  getPageContent,
})(Editor);
