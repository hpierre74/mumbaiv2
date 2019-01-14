import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Row, Col } from './grid.components';

const styles = () => ({
  container: {
    width: '100%',
    height: '100%',
    padding: '5%',
    background: 'whitesmoke',
  },
  actions: {
    margin: ' 0 auto',
    width: '50%',
  },
});

class Confirm extends React.Component {
  handleClose = () => {
    this.props.onCancel();
  };

  handleConfirm = e => {
    this.props.onSubmit(e);
  };

  render() {
    const { title, classes, ...other } = this.props;

    return (
      <Dialog fullWidth aria-labelledby="confirm-dialog" {...other}>
        <div className={classes.container}>
          <Typography color="secondary" variant="h5" component="h3">
            {title}
          </Typography>
          <div>{this.props.children}</div>
          <div className={classes.actions}>
            <Row>
              <Col xs={6} md={6} sm={6}>
                <Button variant="contained" color="secondary" onClick={this.handleClose}>
                  No
                </Button>
              </Col>
              <Col xs={6} md={6} sm={6}>
                <Button variant="contained" color="primary" onClick={this.handleConfirm}>
                  Yes
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Dialog>
    );
  }
}

Confirm.propTypes = {
  title: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default withStyles(styles)(Confirm);
