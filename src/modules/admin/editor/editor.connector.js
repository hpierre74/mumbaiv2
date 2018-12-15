import { connect } from 'react-redux';

import Editor from './editor.component';
import { getPageContent } from '../../pageContentManager/pageContent.action';

const mapStateToProps = ({ app: { config }, pageContent: { content, path, page } }) => ({
  config,
  content,
  path,
  page,
});

export default connect(
  mapStateToProps,
  {
    getPageContent,
  },
)(Editor);
