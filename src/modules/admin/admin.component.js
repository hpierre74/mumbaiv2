import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import { getData } from '../firebase/firebase.class';

import Toaster from '../toaster/toast.connector';
import DrawerComponent from './nav/navbar.connector';

const Wrapper = styled.div`
  width: 100%;
`;

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    marginLeft: drawerWidth,
    backgroundColor: theme.palette.default,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  iconButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  pageTitle: {
    margin: '0 auto',
  },
});

class AdminRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      pages: [],
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  async componentDidMount() {
    const pages = await getData('private/config/pages');

    return Object.values(pages).map(page => this.getComponent(page));
  }

  getComponent(component) {
    return import(`./${component}/${component}.connector.js`).then(module =>
      this.setState(state => ({
        [component]: module.default,
        pages: [...state.pages, component],
      })),
    );
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  renderAdminRoutes = pages =>
    pages.map(item => <Route key={item} path={`/admin/${item}`} component={this.state[item]} />);

  render() {
    const { classes, pathname } = this.props;

    return (
      <Wrapper>
        <AppBar className={classes.appBar} color="primary" position="fixed">
          <Toolbar>
            <IconButton
              className={classes.iconButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Mumbai Admin
            </Typography>
            <Typography className={classes.pageTitle} variant="h6" color="inherit" noWrap>
              {pathname.replace('/admin/', '').toUpperCase()}
            </Typography>
          </Toolbar>
        </AppBar>
        <DrawerComponent pages={this.state.pages} mobileOpen={this.state.mobileOpen} toggle={this.handleDrawerToggle}>
          {this.renderAdminRoutes(this.state.pages)}
        </DrawerComponent>
        <Toaster />
      </Wrapper>
    );
  }
}

AdminRoutes.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  pathname: PropTypes.string.isRequired,
};

export default withStyles(styles)(AdminRoutes);
