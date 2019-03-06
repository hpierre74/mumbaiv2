import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import { Row } from '../../components/grid.components';
import { getTemplate } from '../../pages/styleguide/styleguide.component';

const Section = ({ spacing, data, ...props }) => (
  <Row {...omit(props, ['component'])} spacing={spacing}>
    {getTemplate(data)}
  </Row>
);

Section.propTypes = {
  spacing: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

export default Section;
