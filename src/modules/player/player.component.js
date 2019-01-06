import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '30vh',
    },
  },
});

const Player = props => (
  <video className={props.classes.container} controls autoPlay muted>
    <source src={props.video} type="video/mp4" />
  </video>
);

Player.propTypes = {
  video: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Player);
