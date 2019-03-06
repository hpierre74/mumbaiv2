import React, { memo } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from '@material-ui/core/styles';
import { Col } from '../../components/grid.components';
import LazyImage from '../../components/lazyImg.component';

const styles = {
  root: {
    display: 'flex',
  },
  margin: {
    margin: '2.5%',
  },
  focusVisible: {},
  focusHighlight: { backgroundColor: 'transparent' },
};

const ImageTile = ({ classes, sizes, actionProps, data, alt, margin, ...otherProps }) => {
  return (
    <Col {...sizes}>
      <Card className={margin ? classes.margin : ''}>
        <CardActionArea {...actionProps} classes={omit(classes, ['margin'])}>
          <LazyImage data={data} alt={alt} {...otherProps} />
        </CardActionArea>
      </Card>
    </Col>
  );
};

ImageTile.propTypes = {
  data: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  actionProps: PropTypes.shape({}).isRequired,
  margin: PropTypes.bool,
  sizes: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default memo(withStyles(styles)(ImageTile));
