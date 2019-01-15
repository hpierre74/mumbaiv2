import React from 'react';

import Charts from '../../../components/charts.components';

import { Row, Col } from '../../../components/grid.components';
import Typography from '@material-ui/core/Typography';

export default function Stats() {
  return (
    <Row>
      <Col>
        <Typography component="h4" variant="h5">
          Toutes les réservations
        </Typography>
        <Charts />
      </Col>
      <Col>
        <Typography component="h4" variant="h5">
          Toutes les visites
        </Typography>
        <Charts />
      </Col>
    </Row>
  );
}
