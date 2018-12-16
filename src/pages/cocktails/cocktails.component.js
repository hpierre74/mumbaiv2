import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Row, Col } from '../../components/grid.components';
import { PageWrapper as CocktailsWrapper } from '../../components/wrapper.components';
import { Title3 } from '../../components/title.components';

const Cocktails = () => (
  <CocktailsWrapper>
    <Row>
      <Col sm={12} xs={12} md={12}>
        <Card style={{ margin: '2.5%' }}>
          <CardHeader component={Title3} title="Bar à Cocktails" />
          <CardContent />
        </Card>
      </Col>
    </Row>
  </CocktailsWrapper>
);

export default Cocktails;
