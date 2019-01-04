import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Row, Col } from '../../components/grid.components';
import { Title3 } from '../../components/title.components';

const Food = () => (
  <Row>
    <Col sm={12} xs={12} md={12}>
      <Card style={{ margin: '2.5%' }}>
        <CardHeader component={Title3} title="Cuisine de partage" />
        <CardContent />
      </Card>
    </Col>
  </Row>
);

export default Food;
