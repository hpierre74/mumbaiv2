import React, { Component } from 'react';
import { Row, Col } from '../../components/grid.components';

export default class StyleGuide extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={6}>
          <div>blabla</div>
        </Col>
      </Row>
    );
  }
}
