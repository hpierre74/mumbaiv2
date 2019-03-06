import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import Typography from '@material-ui/core/Typography';

// Components
import { Col } from '../../components/grid.components';

const Title = ({ data, align, gutterBottom, sizes }) => {
  return (
    <Col {...sizes}>
      <Typography style={{ margin: '2.5%' }} gutterBottom={gutterBottom} align={align} component="h3" variant="h5">
        {data}
      </Typography>
    </Col>
  );
};

Title.propTypes = {
  gutterBottom: PropTypes.bool,
  align: PropTypes.string.isRequired,
  sizes: PropTypes.shape({}).isRequired,
  data: PropTypes.string.isRequired,
};

export default Title;
