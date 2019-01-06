import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { Row, Col } from './grid.components';

const Section = props => (
  <Row>
    <Col sm={12} xs={12} md={12}>
      <Typography variant="h3" component="h5">
        {props.title}
      </Typography>
      <div>{props.children}</div>
    </Col>
  </Row>
);
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
};
export default Section;
