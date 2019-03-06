import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

// Material UI
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

// Components
import { Col } from '../../components/grid.components';

// utils
import { getTemplate } from '../../pages/styleguide/styleguide.component';

const styles = {
  card: {
    margin: 'auto',
    padding: 0,
  },
};

const ArticleCard = ({ classes, data, sizes, ...props }) => {
  return (
    <Col component={Card} className={classes.card} {...sizes} {...omit(props, ['component'])}>
      {getTemplate(data)}
    </Col>
  );
};

ArticleCard.propTypes = {
  sizes: PropTypes.shape({}).isRequired,
  data: PropTypes.array.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(ArticleCard);
