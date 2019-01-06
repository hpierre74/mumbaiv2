import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';

import Mail from '../mail/mail.connector';
import { Title3 } from '../../components/title.components';
import { Row, Col } from '../../components/grid.components';

const MapContainer = lazy(() => import('../../components/LeafMap.component'));
const ContactList = lazy(() => import('./contactList.component'));

const Contact = props => {
  const { address, email, tel, social, lat, lng } = props;

  return (
    <Row>
      <Col sm={12} xs={12} md={12}>
        <Card style={{ margin: '2.5%' }}>
          <CardHeader component={Title3} title="Nous Contacter" />
          <CardContent>
            <Suspense fallback={<CircularProgress />}>
              <ContactList email={email} address={address} tel={tel} social={social} />
              <MapContainer address={address} geo={[lat, lng]} />
            </Suspense>
          </CardContent>
        </Card>
      </Col>
      <Col sm={12} xs={12} md={12}>
        <Mail />
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
