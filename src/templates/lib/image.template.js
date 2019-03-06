import React from 'react';
import PropTypes from 'prop-types';
import { Col } from '../../components/grid.components';

import LazyImage from '../../components/lazyImg.component';

const Image = ({ data, sizes, alt }) => {
  return (
    <Col {...sizes}>
      <LazyImage data={data} alt={alt} />
    </Col>
  );
};

Image.propTypes = {
  data: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  sizes: PropTypes.shape({}).isRequired,
};

export default Image;
