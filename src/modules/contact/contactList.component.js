import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Email from '@material-ui/icons/MailRounded';
import Phone from '@material-ui/icons/Phone';
import Location from '@material-ui/icons/LocationOn';
import facebook from '../../style/images/facebook.svg';
import instagram from '../../style/images/icon-instagram.svg';
import SVG from '../../components/svg.component';
import { Row, Col } from '../../components/grid.components';

const ContactList = props => {
  const { email, address, tel, social } = props;

  return (
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
  );
};

ContactList.propTypes = {
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  social: PropTypes.shape({}).isRequired,
};

export default ContactList;
