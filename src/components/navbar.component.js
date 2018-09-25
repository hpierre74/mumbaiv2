import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { fadeInLeft } from 'react-animations';

import logo from '../logo.svg';
import Lang from '../modules/lang/lang.connector';

const fadeInLeftAnim = keyframes`${fadeInLeft}`;

const Navbar = styled.nav`
  display: flex;
  width: 10%;
  height: 10%;

  position: fixed;
  top: 0;
  left: 0;

  align-items: center;

  background: transparent;
  flex-flow: column;

  animation: 1.5s ${fadeInLeftAnim};
`;

const NavLogoWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Svg = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;

const Nav = styled.ul`
  padding: 0;
`;

const NavItem = styled.li`
  padding: 1.5%;

  border-radius: 4px;

  color: white;
  list-style: none;
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
    <Lang />
  </Navbar>
);
export default NavBar;
