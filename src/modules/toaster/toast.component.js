import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
});

const ToastContent = styled.span`
  display: flex;
  align-items: center;
`;

const ToastMessage = styled.p`
  margin-left: 10px;
`;

class Toaster extends React.Component {
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.props.hideToast();
  };

  render() {
    const { classes, content, variant, visible } = this.props;
    const Icon = variantIcon[variant];

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={visible}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <SnackbarContent
          className={classes[variant]}
          aria-describedby="client-snackbar"
          message={
            <ToastContent id="client-snackbar">
              <Icon />
              <ToastMessage>{content}</ToastMessage>
            </ToastContent>
          }
          action={[
            <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleClose}>
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Snackbar>
    );
  }
}

Toaster.defaultProps = {
  content: '',
};

Toaster.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  visible: PropTypes.bool.isRequired,
  hideToast: PropTypes.func.isRequired,
  content: PropTypes.string,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

export default withStyles(styles)(Toaster);
