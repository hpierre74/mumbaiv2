import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { Row, Col } from '../../components/grid.components';
import ImageTile from '../../templates/lib/imageTile.template';

const Events = ({ events }) => {
  if (!events) {
    return null;
  }

  return (
    <div style={{ padding: '2.5%' }}>
      <Row spacing={24}>
        <Col md={12} sm={12} xs={12}>
          <Typography color="primary" align="center" gutterBottom variant="h5" component="h3">
            Nos Events
          </Typography>
        </Col>
        {Object.values(events).map(event => (
          <ImageTile
            actionProps={{ component: 'div' }}
            alt={event.title}
            width="100%"
            height="100%"
            data={event.imageUrl}
            key={event.imageUrl}
            sizes={{ xs: 5, sm: 4, md: 3, lg: 3 }}
          />
        ))}
      </Row>
    </div>
  );
};

Events.propTypes = {
  events: PropTypes.shape({}),
};

export default memo(Events);
