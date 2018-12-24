import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import { Row, Col } from '../../../components/grid.components';
import Confirm from '../../../components/confirm.component';

export default class Resizer extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      image: '',
      imageName: '',
      modal: false,
    };
    this.state = {
      ...this.defaultState,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFileChange = e => this.setState({ [e.target.name]: e.target.files[0] });

  toggleModal = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.toggleModal();

    this.resizeImage();
  };

  resizeImage = () => {
    /* eslint-disable no-console */
    console.log(this.state.image);
  };

  render() {
    const { modal } = this.state;

    return (
      <Card style={{ margin: '2.5%' }}>
        <CardHeader title="Resize File" />
        <CardContent>
          <Row style={{ display: 'flex', justifyContent: 'center' }} container spacing={24}>
            <Col xs={12} md={10}>
              <input
                required
                className="inputfile"
                id="eventImg"
                label="Event Image"
                type="file"
                name="image"
                accept="image/png, image/jpg, image/jpeg"
                onChange={this.handleFileChange}
              />
            </Col>
          </Row>
        </CardContent>
        <Row style={{ display: 'flex', justifyContent: 'center' }} container spacing={24}>
          <Col xs={12} md={12}>
            <Button onClick={this.toggleModal} variant="contained" color="primary">
              Submit Event
            </Button>
          </Col>
          <Col xs={12} md={12}>
            <Confirm
              title="Are you sure you want to resize this file ?"
              open={modal}
              onCancel={this.toggleModal}
              onSubmit={this.handleSubmit}
            />
          </Col>
        </Row>
      </Card>
    );
  }
}

Resizer.propTypes = {
  // showToast: PropTypes.func.isRequired,
};
