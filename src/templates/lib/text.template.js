import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import Typography from '@material-ui/core/Typography';

// Components
import { Col } from '../../components/grid.components';

const Text = ({ data, align, sizes, gutterBottom }) => {
  return (
    <Col {...sizes}>
      <Typography align={align} gutterBottom={gutterBottom} component="p">
        {data}
      </Typography>
    </Col>
  );
};

Text.propTypes = {
  gutterBottom: PropTypes.bool,
  sizes: PropTypes.shape({}).isRequired,
  align: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default Text;
