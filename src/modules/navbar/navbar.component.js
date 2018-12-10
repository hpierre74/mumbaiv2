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
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

import { IconButton, Toolbar, AppBar } from '@material-ui/core';
import logo from '../../logo.svg';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      display: 'none'
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    marginTop: theme.mixins.toolbar.minHeight + 20,
    [theme.breakpoints.up('sm')]: {
      marginTop: 0
    }
  }
});

const NavBar = props => {
  const { classes, theme, pages } = props;

  const drawer = (
    <div>
      <List>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="Mumbai Café" src={logo} />
          </ListItemAvatar>
        </ListItem>
        {Object.values(pages).map(page => (
          <ListItem
            component={Link}
            to={`/${page.target}`}
            button
            key={page.name}
          >
            <ListItemText primary={page.name.toUpperCase()} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color="secondary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={props.toggle}
            className={classes.menuButton}
          >
            <Avatar alt="Mumbai Café" src={logo} />
          </IconButton>
          <h2> Mumbai Café</h2>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.mobileOpen}
            onClose={props.toggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>{props.children}</main>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  pages: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(NavBar);