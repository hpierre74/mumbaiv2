import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import SVG from '../../components/svg.component';
import logo from '../../logo.svg';

const styles = {
  container: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    zIndex: 100000,
    width: '100vw',
    height: '100vh',
    background: '#0a0a0a',
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
};

class Splash extends Component {
  componentDidMount = () => {
    if (!this.props.splashed) {
      this.props.showSplash();
    }
  };

  render() {
    const { classes, splash } = this.props;

    return (
      <div className={classNames(classes.container, splash ? classes.visible : classes.hidden)}>
        <SVG src={logo} width="300px" alt="logo" />
      </div>
    );
  }
}

Splash.propTypes = {
  splash: PropTypes.bool.isRequired,
  splashed: PropTypes.bool.isRequired,
  showSplash: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Splash);
