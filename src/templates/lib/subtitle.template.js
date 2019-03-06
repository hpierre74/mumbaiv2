import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Components
import { Col } from '../../components/grid.components';

const styles = {
  col: {
    margin: '0 auto',
  },
};

const Subtitle = ({ classes, value, sizes }) => {
  return (
    <Col className={classes.col} {...sizes}>
      <Typography component="h4" variant="h6">
        {value}
      </Typography>
    </Col>
  );
};

Subtitle.propTypes = {
  sizes: PropTypes.shape({}).isRequired,
  value: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Subtitle);
