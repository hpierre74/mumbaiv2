import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  flex: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
};

class FlexBox extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.flex} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}
FlexBox.defaultProps = {
  style: {},
};

FlexBox.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.array,
  style: PropTypes.shape({}),
};

export default withStyles(styles, { withTheme: true })(FlexBox);
