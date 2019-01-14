import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Jumbotron from './jumbotron.component';
import { Row, Col } from '../../components/grid.components';

const styles = theme => ({
  wrapper: {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: { padding: '10% 2.5%' },
    [theme.breakpoints.up('sm')]: { padding: '5% 2.5%' },
    [theme.breakpoints.up('md')]: { padding: '2.5% 2.5%' },
  },
  title: { padding: '5%' },
  button: {
    width: '90%',
    margin: '1% auto',
  },
  label: {
    display: 'flex',
    flexFlow: 'column',
    lineHeight: '30px',
  },
});

const Presentation = props => {
  const {
    presentation: { concept },
    classes,
  } = props;

  return (
    <div className={classes.wrapper}>
      <Row justify="center">
        <Col sm={12} xs={12} md={10}>
          <Row justify="space-around">
            <Col sm={12} xs={12} md={12}>
              <Typography
                color="primary"
                className={classes.title}
                gutterBottom
                variant="h5"
                component="h3"
                align="center"
              >
                {concept}
              </Typography>
            </Col>
          </Row>
          <Jumbotron />
        </Col>
      </Row>
    </div>
  );
};

Presentation.defaultProps = {
  presentation: {
    concept: null,
    food: null,
  },
};

Presentation.propTypes = {
  presentation: PropTypes.shape({
    concept: PropTypes.string,
    food: PropTypes.string,
  }),
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Presentation);
