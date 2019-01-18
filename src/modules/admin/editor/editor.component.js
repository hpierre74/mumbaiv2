import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import withStyles from '@material-ui/core/styles/withStyles';

import PageTabs from '../../../components/tabList.component';
import EditForm from './editForm.connector';
import { Row, Col } from '../../../components/grid.components';

const styles = {
  container: {
    width: '95%',
    margin: '0 auto',
  },
};

class Editor extends PureComponent {
  static getDerivedStateFromProps = nextProps => {
    const { content, config } = nextProps;

    return {
      content: omit(content, ['events']),
      pages: config.pages,
    };
  };

  constructor(props) {
    super(props);
    this.state = { pages: [] };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  setPages = pages => {
    this.setState({ pages });
  };

  handleInputChange = () => e => {
    this.setState(state => ({
      content: {
        ...state.content,
        [e.target.name]: e.target.value,
      },
    }));
  };

  renderPageContentEditors = content =>
    Object.keys(content).map(contentKey => {
      switch (typeof content[contentKey]) {
        case 'string': {
          return (
            <Col key={contentKey} sm={12} xs={12} md={6}>
              <EditForm
                key={contentKey}
                path={`${this.props.path}/`}
                handleInputChange={this.handleInputChange}
                currentContent={content[contentKey]}
                contentName={contentKey}
                value={this.state.content[contentKey]}
              />
            </Col>
          );
        }
        case 'number': {
          return (
            <Col key={contentKey} sm={12} xs={12} md={6}>
              <EditForm
                key={contentKey}
                path={`${this.props.path}/`}
                handleInputChange={this.handleInputChange}
                currentContent={content[contentKey]}
                contentName={contentKey}
                value={this.state.content[contentKey]}
              />
            </Col>
          );
        }
        case 'object': {
          return Object.keys(content[contentKey]).map(subContentKey => (
            <Col key={subContentKey} sm={12} xs={12} md={6}>
              <EditForm
                key={subContentKey}
                path={`${this.props.path}/${contentKey}/`}
                handleInputChange={this.handleInputChange}
                currentContent={content[contentKey][subContentKey]}
                contentName={subContentKey}
                value={this.state.content[contentKey][subContentKey]}
              />
            </Col>
          ));
        }
        default:
          return null;
      }
    });

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <PageTabs items={this.state.pages} action={this.props.getPageContent}>
          <Row>{this.renderPageContentEditors(this.state.content)}</Row>
        </PageTabs>
      </div>
    );
  }
}
Editor.defaultProps = { path: '' };

Editor.propTypes = {
  // lang: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired,
  path: PropTypes.string,
  getPageContent: PropTypes.func.isRequired,
};

export default withStyles(styles)(Editor);
