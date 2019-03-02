import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import Confirm from '../../components/confirm.component';
import { Row, Col } from '../../components/grid.components';

class Mail extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      object: '',
      content: '',
      modal: false,
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { sendMailToAdmin } = this.props;
    e.preventDefault();

    sendMailToAdmin(omit(this.state, ['modal']));
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      object: '',
      content: '',
    });
  };

  toggleModal = () => {
    this.setState(state => ({ modal: !state.modal }));
  };

  render() {
    const { firstname, lastname, email, object, content, modal } = this.state;

    return (
      <Card style={{ margin: '0 2.5%' }}>
        <CardHeader disableTypography component="h3" color="primary" title="NOUS ÉCRIRE" />
        <CardContent>
          <Row style={{ display: 'flex', justifyContent: 'center' }} container spacing={24}>
            <Col xs={12} md={6}>
              <TextField
                required
                onChange={this.handleInputChange}
                name="firstname"
                value={firstname}
                id="firstname"
                label="Votre prénom"
                fullWidth
              />
            </Col>
            <Col xs={12} md={6}>
              <TextField
                required
                onChange={this.handleInputChange}
                name="lastname"
                value={lastname}
                id="lastname"
                label="Votre nom"
                fullWidth
              />
            </Col>
            <Col xs={12} md={6}>
              <TextField
                required
                onChange={this.handleInputChange}
                name="object"
                value={object}
                id="object"
                label="Objet"
                fullWidth
              />
            </Col>
            <Col xs={12} md={6}>
              <TextField
                required
                onChange={this.handleInputChange}
                name="email"
                value={email}
                id="email"
                label="Email"
                fullWidth
              />
            </Col>
            <Col xs={12} md={12}>
              <TextField
                required
                onChange={this.handleInputChange}
                name="content"
                value={content}
                id="content"
                label="Contenu"
                fullWidth
                multiline
              />
            </Col>
          </Row>
        </CardContent>
        <Row style={{ display: 'flex', justifyContent: 'center' }} container spacing={24}>
          <Col xs={12} md={12}>
            <Button onClick={this.toggleModal} variant="contained" color="primary">
              Envoyer
            </Button>
          </Col>
          <Col xs={12} md={12}>
            <Confirm
              title="Êtes vous sûr de vouloir envoyer cet email ?"
              open={modal}
              onCancel={this.toggleModal}
              onSubmit={this.handleSubmit}
            >
              <List>
                <ListItemText>
                  <Typography>{`Vous êtes Mr. ${firstname} ${lastname}`}</Typography>
                </ListItemText>
                <ListItemText>
                  <Typography gutterBottom component="p">
                    Voici votre email...
                  </Typography>
                </ListItemText>
              </List>
            </Confirm>
          </Col>
        </Row>
      </Card>
    );
  }
}

Mail.propTypes = { sendMailToAdmin: PropTypes.func.isRequired };

export default Mail;
