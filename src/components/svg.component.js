import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const SvgImg = styled.img``;

function SVG(props) {
  return (
    <img
      src={props.src}
      height={props.height ? props.height : '100%'}
      width={props.width ? props.width : '100%'}
      style={props.style}
      alt={props.alt}
    />
  );
}
SVG.defaultProps = {
  height: null,
  width: null,
  style: null,
};

SVG.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  alt: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
};

export default SVG;
