import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from './grid.components';
import { PageWrapper as SectionWrapper } from './wrapper.components';
import { Title3 } from './title.components';

const Section = props => (
  <SectionWrapper>
    <Row>
      <Col sm={12} xs={12} md={12}>
        <Title3>{props.title}</Title3>
        <div>{props.children}</div>
      </Col>
    </Row>
  </SectionWrapper>
);
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
};
export default Section;
