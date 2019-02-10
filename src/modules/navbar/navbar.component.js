import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

import { withStyles } from '@material-ui/core/styles';

import logo from '../../logo.svg';
import NavIcon from './navicon.component';
import SVG from '../../components/svg.component';
import facebook from '../../style/images/facebook.svg';
import instagram from '../../style/images/icon-instagram.svg';
import uber from '../../style/images/uber-eats.svg';

const drawerWidth = 240;

const styles = theme => ({
  root: { display: 'flex' },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      display: 'none',
    },
  },
  menuButton: {
    marginRight: 20,
    // [theme.breakpoints.up('sm')]: { display: theme.desktop.navbar ? 'none' : 'initial' },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: theme.palette.primary.main,
  },
  content: {
    flexGrow: 1,
    marginTop: theme.mixins.toolbar.minHeight + 20,

    [theme.breakpoints.up('sm')]: { marginTop: 0 },
  },
  divider: {
    marginTop: '5%',
    marginBottom: '5%',
  },
  spaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});

const NavBar = props => {
  const { classes, theme, pages, name, modules, general } = props;

  const drawer = (
    <div>
      <List color="secondary">
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt={name} src={logo} />
          </ListItemAvatar>
        </ListItem>
        {Object.values(pages).map(
          page =>
            modules[page.target].enabled && (
              <ListItem component={Link} to={page.path} button key={page.name}>
                <ListItemIcon color="#fff">
                  <NavIcon name={page.target} />
                </ListItemIcon>
                <ListItemText color="secondary" secondary={page.name.toUpperCase()} />
              </ListItem>
            ),
        )}
        <Divider className={classes.divider} variant="middle" />
        <ListItem className={classes.spaceAround}>
          <ListItemIcon>
            <SVG height="26px" width="26px" isLink href={general.facebook} src={facebook} alt="facebook-icon" />
          </ListItemIcon>
          <ListItemIcon>
            <SVG height="26px" width="26px" isLink src={instagram} href={general.instagram} alt="instagram-icon" />
          </ListItemIcon>
          <ListItemIcon>
            <SVG height="20px" width="21px" isLink src={uber} href={general.instagram} alt="uber-eats-icon" />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Open drawer" onClick={props.toggle} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <h2>{name}</h2>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.mobileOpen}
            onClose={props.toggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open
            onClose={props.toggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
            variant="permanent"
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>{props.children}</main>
    </div>
  );
};
NavBar.defaultProps = { name: '' };
NavBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  pages: PropTypes.shape({}).isRequired,
  name: PropTypes.string,
  modules: PropTypes.shape({}).isRequired,
  general: PropTypes.shape({}).isRequired,
};

export default withStyles(styles, { withTheme: true })(NavBar);
