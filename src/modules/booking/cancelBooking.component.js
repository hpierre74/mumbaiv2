import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Confirm from '../../components/confirm.component';
import { Row, Col } from '../../components/grid.components';
import { requestPost } from '../../utils/http.utils';
// import { setData } from '../../utils/firebase.utils';

export default class CancelBooking extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      bookingId: '',
      userEmail: '',
      modal: false,
    };
    this.state = { ...this.defaultState };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleModal = () => {
    this.setState(state => ({ modal: !state.modal }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.toggleModal();
    const { showToast } = this.props;
    const state = omit(this.state, 'modal');
    console.log(state);

    requestPost('https://us-central1-la-taverne-du-perroquet-lyon.cloudfunctions.net/cancelBooking/', state)
      .then(res => {
        console.log(res);

        this.setState({ ...this.defaultState });
        showToast('success', 'Votre réservation a bien été annulée, merci');
      })
      .catch(err => showToast('error', "Oups, cela n'a pas marché", err));
  };

  render() {
    return (
      <Card style={{ margin: '2.5%' }}>
        <CardHeader color="secondary" component="h3" title="Annuler votre réservation" />
        <CardContent>
          <Row style={{ display: 'flex', justifyContent: 'center' }} container spacing={24}>
            <Col xs={12} md={6}>
              <TextField
                required
                onChange={this.handleChange}
                name="bookingId"
                value={this.state.bookingId}
                id="bookingId"
                label="Votre identifiant de réservation"
                fullWidth
              />
            </Col>
            <Col xs={12} md={6}>
              <TextField
                required
                onChange={this.handleChange}
                name="userEmail"
                value={this.state.userEmail}
                id="userEmail"
                label="Votre adresse email de réservation"
                fullWidth
              />
            </Col>
          </Row>
        </CardContent>
        <Row style={{ display: 'flex', justifyContent: 'center' }} container spacing={24}>
          <Col xs={12} md={12}>
            <Button onClick={this.toggleModal} variant="outlined" color="primary">
              Annuler la réservation
            </Button>
          </Col>
          <Col xs={12} md={12}>
            <Confirm
              title="ëtes vous sûr de vouloir annuler ?"
              open={this.state.modal}
              onCancel={this.toggleModal}
              onSubmit={this.handleSubmit}
            >
              {this.state.modal && (
                <Typography>{`Confirmer l'annulation de la réservation ${this.state.bookingId}`} </Typography>
              )}
            </Confirm>
          </Col>
        </Row>
      </Card>
    );
  }
}

CancelBooking.propTypes = {
  showToast: PropTypes.func.isRequired,
};
