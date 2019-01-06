import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from './grid.components';

const Section = props => (
  <Row>
    <Col sm={12} xs={12} md={12}>
      {props.children}
    </Col>
  </Row>
);
Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
};
export default Section;
