import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import PageTabs from '../../../components/tabList.component';
import { getData } from '../../firebase/firebase.class';
import EditForm from './editForm.connector';

const EditorWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

class Editor extends PureComponent {
  static getDerivedStateFromProps = nextProps => {
    const { content } = nextProps;

    return {
      content: omit(content, ['events']),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      pages: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount = async () => {
    const pages = await getData('public/config/pages');
    this.setPages(pages);
  };

  setPages = pages => {
    this.setState({ pages });
  };

  handleInputChange = () => e => {
    this.setState(state => ({ content: { ...state.content, [e.target.name]: e.target.value } }));
  };

  renderPageContentEditors = content =>
    Object.keys(content).map(contentKey => {
      switch (typeof content[contentKey]) {
        case 'string': {
          return (
            <EditForm
              key={contentKey}
              path={`${this.props.path}/`}
              handleInputChange={e => this.handleInputChange(e)}
              currentContent={content[contentKey]}
              contentName={contentKey}
              value={this.state.content[contentKey]}
            />
          );
        }
        case 'number': {
          return (
            <EditForm
              key={contentKey}
              path={`${this.props.path}/`}
              handleInputChange={this.handleInputChange}
              currentContent={content[contentKey]}
              contentName={contentKey}
              value={this.state.content[contentKey]}
            />
          );
        }
        case 'object': {
          return Object.keys(content[contentKey]).map(subContentKey => (
            <EditForm
              key={subContentKey}
              path={`${this.props.path}/${contentKey}/`}
              currentContent={content[contentKey][subContentKey]}
              contentName={subContentKey}
              value={this.state.content[contentKey][subContentKey]}
            />
          ));
        }
        default:
          return false;
      }
    });

  render() {
    return (
      <EditorWrapper>
        <PageTabs items={this.state.pages} action={this.props.getPageContent}>
          <div>{this.renderPageContentEditors(this.state.content)}</div>
        </PageTabs>
      </EditorWrapper>
    );
  }
}
Editor.defaultProps = {
  path: '',
};

Editor.propTypes = {
  // lang: PropTypes.string.isRequired,
  path: PropTypes.string,
  getPageContent: PropTypes.func.isRequired,
};

export default Editor;
