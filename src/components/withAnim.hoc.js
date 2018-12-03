import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const requireAnimation = async animation => {
  const anim = await import(`react-animations/lib/${animation}`);

  return anim.default;
};

const AnimationWrapper = styled.div`
  animation: ${({ duration }) => duration}s ${({ animation }) => animation};
`;

const withAnim = Component => {
  const withAnimHOC = props => (
    <AnimationWrapper duration={props.duration} animation={keyframes`${requireAnimation(props.animation)}`}>
      <Component {...props} />
    </AnimationWrapper>
  );

  withAnimHOC.defaultProps = {
    duration: '1.5',
  };

  withAnimHOC.propTypes = {
    animation: PropTypes.string.isRequired,
    duration: PropTypes.string,
  };

  return withAnimHOC;
};

export default withAnim;
