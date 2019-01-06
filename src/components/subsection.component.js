import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Row } from './grid.components';

const SubSection = props => (
  <Card style={{ margin: '2.5%' }}>
    <CardHeader disableTypography component="h3" title={props.title} />
    <CardContent>
      <Row spacing={24}>{props.children}</Row>
    </CardContent>
  </Card>
);
SubSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
};
export default SubSection;
