import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { SvgImg } from './svg.component';

import book from '../style/images/agenda1.svg';
import contact from '../style/images/phone-book1.svg';
import menu from '../style/images/menu1.svg';
import home from '../style/images/home.svg';

const Wrapper = styled.div`
  display: flex;
  padding: 5%;

  justify-content: space-around;

  background: black;
`;

const IconWrapper = styled(Link)`
  width: 75px;
  height: 75px;

  border: 1px solid white;
  border-radius: 50%;
`;

const Icon = SvgImg.extend`
  width: 50px;
  height: 100%;
`;

const Iconav = () => (
  <Wrapper>
    <IconWrapper to="/">
      <Icon src={home} alt="home" />
    </IconWrapper>
    <IconWrapper to="/menu">
      <Icon src={menu} alt="menu" />
    </IconWrapper>
    <IconWrapper to="/book">
      <Icon src={book} alt="book" />
    </IconWrapper>
    <IconWrapper to="/contact">
      <Icon src={contact} alt="contact" />
    </IconWrapper>
  </Wrapper>
);
export default Iconav;
