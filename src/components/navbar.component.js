import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { fadeInRightBig, fadeInLeftBig, fadeInDown } from 'react-animations';

import logo from '../logo.svg';

const fadeInRightAnim = keyframes`${fadeInRightBig}`;
const fadeInLeftAnim = keyframes`${fadeInLeftBig}`;
const fadeInDownAnim = keyframes`${fadeInDown}`;

const Navbar = styled.nav`
  display: flex;
  width: 80%;
  height: 10%;

  position: fixed;
  top: 0;
  left: 10%;

  justify-content: space-between;
  align-items: center;

  background: black;
  flex-flow: row wrap;

  animation: 1.5s ${fadeInDownAnim};
`;

const NavLogoWrapper = styled.div`
  width: 10%;
  height: 100%;

  animation: 1.5s ${fadeInLeftAnim};
`;

const Svg = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;

const Nav = styled.ul`
  display: flex;
  width: 30%;

  justify-content: space-around;

  flex-flow: row wrap;
`;

const NavItem = styled.li`
  padding: 1.5%;

  border-radius: 4px;

  color: white;
  list-style: none;
  animation: 1.5s ${fadeInRightAnim};
  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => (
  <Navbar>
    <NavLogoWrapper>
      <Link to="/">
        <Svg src={logo} alt="logo" />
      </Link>
    </NavLogoWrapper>
    <Nav>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="book">Réserver</Link>
      </NavItem>
      <NavItem>
        <Link to="contact">Contact</Link>
      </NavItem>
    </Nav>
  </Navbar>
);
export default NavBar;
