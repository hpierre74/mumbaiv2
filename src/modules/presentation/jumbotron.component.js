import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import BookIcon from '@material-ui/icons/Book';
import LibraryBookIcon from '@material-ui/icons/LibraryBooks';
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

const Jumbotron = props => {
  const { classes } = props;

  return (
    <Row wrap="wrap" justify="space-around">
      <Col sm={4} xs={12} md={4}>
        <Button
          classes={{ label: classes.label }}
          className={classes.button}
          size="large"
          color="primary"
          variant="outlined"
          component={Link}
          to="/book"
        >
          <BookIcon />
          Réservation
        </Button>
      </Col>
      <Col sm={4} xs={12} md={4}>
        <Button
          classes={{ label: classes.label }}
          className={classes.button}
          size="large"
          color="primary"
          variant="outlined"
          component={Link}
          to="/book"
        >
          <MotorcycleIcon />
          Livraison
        </Button>
      </Col>
      <Col sm={4} xs={12} md={4}>
        <Button
          // onClick={}
          classes={{ label: classes.label }}
          className={classes.button}
          size="large"
          color="primary"
          variant="outlined"
          component={Link}
          to="/food"
        >
          <LibraryBookIcon />
          Menu
        </Button>
      </Col>
    </Row>
  );
};

Jumbotron.propTypes = { classes: PropTypes.shape({}).isRequired };

export default withStyles(styles)(Jumbotron);
