import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PowerOff from '@material-ui/icons/SettingsPowerRounded';
import { withStyles } from '@material-ui/core/styles';

import { renderRoutes } from '../../utils/routing.utils';

import Toaster from '../toaster/toast.connector';
import DrawerComponent from './nav/navbar.connector';
import Login from '../auth/login.connector';

const drawerWidth = 240;

const styles = theme => ({
  wrapper: {
    width: '100%',
    color: 'black',
  },
  appBar: {
    marginLeft: drawerWidth,
    backgroundColor: theme.palette.default,
    [theme.breakpoints.up('sm')]: { width: `calc(100% - ${drawerWidth}px)` },
  },
  iconButton: { [theme.breakpoints.up('sm')]: { display: 'none' } },
  pageTitle: { margin: '0 auto' },
});

class AdminRoutes extends Component {
  constructor(props) {
    super(props);
    this.init = false;
    this.state = {
      mobileOpen: false,
      pages: [],
      rendered: false,
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  shouldComponentUpdate = async nextProps => {
    if (!this.init && nextProps.isAdmin) {
      this.props.configInitAdmin();
      this.init = true;

      return false;
    }

    const { config } = nextProps;
    if (!this.props.config && config) {
      await Promise.all([Object.values(config.pages).map(page => this.getComponent(page))]);
    }

    return false;
  };

  async getComponent(component) {
    return import(`./${component.target}/${component.target}.connector.js`).then(module =>
      this.setState(state => ({
        [component.name]: module.default,
        pages: [...state.pages, component],
      })),
    );
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  renderAdminRoutes = () => {
    const { config } = this.props;
    if (!config) {
      return null;
    }
    const { pages } = config;

    return renderRoutes(pages, this.state);
  };

  render() {
    const { classes, pathname, isAdmin } = this.props;

    return (
      <div className={classes.wrapper}>
        {isAdmin ? (
          <div>
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
                  Admin
                </Typography>
                <Typography className={classes.pageTitle} variant="h6" color="inherit" noWrap>
                  {pathname.replace('/admin/', '').toUpperCase()}
                </Typography>
                <IconButton component={Link} to="/" color="secondary" aria-label="Logout" onClick={this.props.logout}>
                  <PowerOff />
                </IconButton>
              </Toolbar>
            </AppBar>
            <DrawerComponent
              pages={this.state.pages}
              mobileOpen={this.state.mobileOpen}
              toggle={this.handleDrawerToggle}
            >
              {this.renderAdminRoutes()}
            </DrawerComponent>
          </div>
        ) : (
          <Login />
        )}
        <Toaster />
      </div>
    );
  }
}

AdminRoutes.defaultProps = { config: null };

AdminRoutes.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  pathname: PropTypes.string.isRequired,
  configInitAdmin: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  config: PropTypes.shape({ pages: PropTypes.shape({}) }),
};

export default withStyles(styles)(AdminRoutes);
