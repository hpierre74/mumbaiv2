import React from 'react';
import styled from 'styled-components';

import Video from '../style/videos/intro.mp4';

const StyledPlayer = styled.video`
  width: 100%;
  height: 60vh;
  @media (max-width: 700px) {
    height: 50vh;
  }
`;

const Player = () => (
  <StyledPlayer controls autoPlay muted>
    <source src={Video} type="video/mp4" />
  </StyledPlayer>
);
export default Player;
