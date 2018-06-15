import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

import SVG from './svg.component';
import logo from '../logo.svg';

const fadeInAnim = keyframes`${fadeIn}`;
const Jumbo = styled.div`
  padding: 10% 0 5%;
  animation: 5s ${fadeInAnim};
`;

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  margin: 2.5% auto;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Jumbotron = () => (
  <Jumbo className="jumbo" fluid>
    <Wrapper>
      <SVG src={logo} alt="svg-class-name" />
    </Wrapper>
    <Title>Mumbai Café</Title>
  </Jumbo>
);
export default Jumbotron;
