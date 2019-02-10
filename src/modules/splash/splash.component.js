import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import SVG from '../../components/svg.component';
import logo from '../../logo.svg';

const styles = theme => ({
  container: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    zIndex: 100000,
    width: '100vw',
    height: '100vh',
    background: theme.palette.primary.main,
    transition: 'all 0.5s',
  },
  visible: {
    opacity: 1,
    visibility: 'block',
  },
  hidden: {
    visibility: 'hidden',
    opacity: 0,
  },
});

const Splash = props => {
  const { classes, splash } = props;

  return (
    <div className={classNames(classes.container, splash ? classes.visible : classes.hidden)}>
      <SVG src={logo} width="300px" alt="logo" />
    </div>
  );
};

Splash.propTypes = {
  splash: PropTypes.bool.isRequired,
  splashed: PropTypes.bool.isRequired,
  showSplash: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
  modules: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Splash);
