import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Title3 } from '../../../components/title.components';
import logo from '../../../logo.svg';
import withAnim from '../../../components/withAnim.hoc';

const Navbar = styled.nav`
  display: flex;
  width: 200px;
  height: 100vh;

  background: #25272b;

  color: white;
  text-align: center;
  line-height: 15px;
  flex-flow: column;
  border-right: 1px solid white;
`;

const NavIcon = styled.img`
  width: 50%;
  margin: 1em auto;
`;

const NavDropdown = styled.div``;

const NavList = styled.ul`
  display: flex;
  flex-flow: column;

  margin: 0 15px;
  padding: 0;
`;

const NavListHeader = styled(Title3)`
  margin: 0;

  &:hover {
    color: cyan;

    transform: translateX(5px) translateY(-2px);
    transition: 0.5s all ease;

    cursor: pointer;
  }
`;

const NavItem = withAnim(styled.li`
  margin: 10px;

  text-align: center;
  list-style-type: none;

  ${({ active }) =>
    active
      ? `
    color: orange;

    transform: translateY(2px);
    transition: 0.5s all ease;
  `
      : ''};
  &:hover {
    color: orange;

    transform: translateY(2px);
    transition: 0.5s all ease;
  }
`);

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
    };
  }

  setActiveNav = itemName => {
    this.setState({ active: itemName });
  };

  renderAdminRoutes = pages =>
    Object.keys(pages).map(listKey =>
      Object.values(pages[listKey]).map(item => (
        <Route path={`/admin/${item}`} component={async () => import(`../${item}/${item}.connector.js`)} />
      )),
    );

  renderNavItems = () => {
    const { pages } = this.props;

    return Object.keys(pages).map(listKey => (
      <NavList key={listKey}>
        <NavListHeader>{listKey}</NavListHeader>
        {Object.values(pages[listKey]).map(item => (
          <NavItem active={this.state.active === item} animation="slideInDown" key={`${listKey}-${item}`}>
            <Link onClick={() => this.setActiveNav(item)} to={`/admin/${item}`}>
              {item}
            </Link>
          </NavItem>
        ))}
      </NavList>
    ));
  };

  render() {
    return (
      <Navbar>
        <Link to="/">
          <NavIcon src={logo} alt="mumbai" />
        </Link>
        <NavDropdown>{this.renderNavItems()}</NavDropdown>
      </Navbar>
    );
  }
}

NavBar.propTypes = {
  pages: PropTypes.shape({}).isRequired,
};

export default NavBar;
