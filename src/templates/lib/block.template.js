import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
// Material UI
import { withStyles } from '@material-ui/core/styles';

// Components
import { Col } from '../../components/grid.components';

// utils
import { getTemplate } from '../../pages/styleguide/styleguide.component';

const styles = {
  card: {
    margin: 'auto',
    padding: 0,
  },
};

const Block = ({ classes, data, sizes, ...props }) => {
  return (
    <Col component="div" className={classes.card} {...sizes} {...omit(props, ['component'])}>
      {getTemplate(data)}
    </Col>
  );
};

Block.propTypes = {
  sizes: PropTypes.shape({}).isRequired,
  data: PropTypes.array.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Block);
