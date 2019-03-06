import React, { memo, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { Row, Col } from '../../components/grid.components';
import { CircularProgress } from '@material-ui/core';

const InstaTile = lazy(() => import('./instaTile.component'));

const Instagram = ({ getInstagramFeed, feed, enabled }) => {
  if (!feed || !enabled) {
    getInstagramFeed();

    return null;
  }

  return (
    <div style={{ padding: '2.5%' }}>
      <Row spacing={24}>
        <Col md={12} sm={12} xs={12}>
          <Typography color="primary" align="center" gutterBottom variant="h5" component="h3">
            Notre Instagram
          </Typography>
        </Col>
        <Suspense fallback={<CircularProgress />}>
          {feed.map(image => (
            <InstaTile key={image.link} image={image} />
          ))}
        </Suspense>
      </Row>
    </div>
  );
};

Instagram.defaultProps = {
  feed: null,
};

Instagram.propTypes = {
  getInstagramFeed: PropTypes.func.isRequired,
  feed: PropTypes.array,
  enabled: PropTypes.bool.isRequired,
};

export default memo(Instagram);
