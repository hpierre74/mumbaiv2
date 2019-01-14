import React from 'react';
import PropTypes from 'prop-types';

import { Col } from './grid.components';

const Menu = props => (
  <Col sm={12} md={12} xs={12}>
    <img width="100%" style={{ maxWidth: ' 700px' }} src={props.src} alt="menu" />
  </Col>
);

Menu.propTypes = { src: PropTypes.string.isRequired };

export default Menu;
