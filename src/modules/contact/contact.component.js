import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Email from '@material-ui/icons/MailRounded';
import Phone from '@material-ui/icons/Phone';
import Location from '@material-ui/icons/LocationOn';

import { ListItemIcon, ListItemText } from '@material-ui/core';
import MapContainer from '../../components/LeafMap.component';
import Mail from '../mail/mail.connector';
import { Title3 } from '../../components/title.components';
import { Row, Col } from '../../components/grid.components';
import facebook from '../../style/images/facebook.svg';
import instagram from '../../style/images/icon-instagram.svg';
import SVG from '../../components/svg.component';

const Contact = props => {
  const { email, address, lat, lng, tel, social } = props;

  return (
    <Row>
      <Col sm={12} xs={12} md={12}>
        <Card style={{ margin: '2.5%' }}>
          <CardHeader component={Title3} title="Nous Contacter" />
          <CardContent>
            <List component={Row}>
              <ListItem md={6} sm={6} component={Col}>
                <ListItemIcon>
                  <Location />
                </ListItemIcon>
                <ListItemText primary={address} />
              </ListItem>
              <ListItem md={6} sm={6} component={Col}>
                <ListItemIcon>
                  <Email />
                </ListItemIcon>
                <ListItemText primary={email} />
              </ListItem>
              <ListItem md={6} sm={6} component={Col}>
                <ListItemIcon>
                  <Phone />
                </ListItemIcon>
                <ListItemText primary={tel} />
              </ListItem>
              <ListItem md={6} sm={6} component={Col}>
                <ListItemIcon>
                  <SVG src={instagram} alt="instagram-icon" />
                </ListItemIcon>
                <ListItemText primary={social.instagram} />
              </ListItem>
              <ListItem md={6} sm={6} component={Col}>
                <ListItemIcon>
                  <SVG height="24px" width="24px" src={facebook} alt="facebook-icon" />
                </ListItemIcon>
                <ListItemText primary={social.facebook} />
              </ListItem>
            </List>
            <MapContainer address={address} geo={[lat, lng]} />
          </CardContent>
        </Card>
      </Col>
      <Col sm={12} xs={12} md={12}>
        <Card style={{ margin: '2.5%' }}>
          <CardHeader component={Title3} title="Nous Ecrire" />
          <CardContent>
            <Mail />
          </CardContent>
        </Card>
      </Col>
    </Row>
  );
};

Contact.defaultProps = {
  email: '',
  address: '',
  tel: '',
  lat: null,
  lng: null,
  social: {},
};

Contact.propTypes = {
  email: PropTypes.string,
  address: PropTypes.string,
  tel: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
  social: PropTypes.shape({}),
};

export default Contact;
