import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPlayer = styled.video`
  width: 100%;
  height: 100%;
  @media (max-width: 700px) {
    height: 40vh;
  }
`;

const Player = props => (
  <StyledPlayer controls autoPlay muted>
    <source src={props.video} type="video/mp4" />
  </StyledPlayer>
);

Player.propTypes = {
  video: PropTypes.string.isRequired,
};

export default Player;
