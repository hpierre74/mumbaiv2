import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from '@material-ui/core/styles';
import { Col } from '../../components/grid.components';
import LazyImage from '../../components/lazyImg.component';

const styles = {
  focusVisible: {},
  focusHighlight: { backgroundColor: 'transparent' },
};

const Instagram = ({ image, classes }) => {
  return (
    <Col lg={3} md={3} sm={4} xs={6}>
      <Card>
        <CardActionArea component="a" href={image.link} classes={{ focusHighlight: classes.focusHighlight }}>
          <LazyImage width="100%" height="100%" data={image.url} alt={image.url} />
        </CardActionArea>
      </Card>
    </Col>
  );
};

Instagram.propTypes = {
  image: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default memo(withStyles(styles)(Instagram));
