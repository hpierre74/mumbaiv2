import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { Row, Col } from './grid.components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;

  background: whitesmoke;
`;

const Actions = styled.div`
  margin: 0 auto;
  width: 50%;
`;

const Title = styled.h3`
  margin: 0 auto;
  padding: 5%;
  color: black;
`;

/* eslint-disable */
class Confirm extends React.Component {
  handleClose = () => {
    this.props.onCancel();
  };

  handleConfirm = e => {
    this.props.onSubmit(e);
  };

  render() {
    const { title, ...other } = this.props;

    return (
      <Dialog fullWidth aria-labelledby="confirm-dialog" {...other}>
        <Container>
          <Title>{title}</Title>
          <div>{this.props.children}</div>
          <Actions>
            <Row>
              <Col xs={6} md={6} sm={6}>
                <Button variant="contained" color="secondary" onClick={this.handleClose}>
                  No
                </Button>
              </Col>
              <Col xs={6} md={6} sm={6}>
                <Button variant="contained" color="primary" onClick={this.handleConfirm}>
                  Yes
                </Button>
              </Col>
            </Row>
          </Actions>
        </Container>
      </Dialog>
    );
  }
}

Confirm.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Confirm;
