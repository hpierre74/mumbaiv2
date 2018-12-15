import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MapContainer from '../../components/LeafMap.component';
import { PageWrapper as ContactWrapper } from '../../components/wrapper.components';
import Mail from '../../modules/mail/mail.connector';
import { Title3 } from '../../components/title.components';
import Text from '../../components/text.component';
import location from '../../style/images/location.svg';
import mail from '../../style/images/contact.svg';
import phone from '../../style/images/phone-call.svg';
import facebook from '../../style/images/facebook.svg';
import foodora from '../../style/images/foodora.svg';
import instagram from '../../style/images/instagram.svg';
import SVG from '../../components/svg.component';

const LocationWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  padding: 2.5%;

  justify-content: center;
`;

const Title = styled(Title3)`
  width: ${window.innerWidth > 600 ? '70%' : '100%'};
  margin: 0 auto;
  padding: 5% 0;
  @media (max-width: 700px) {
  }
`;

const ContactText = styled(Text)`
  display: none;
`;
const ContactInfoWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  width: 50%;

  justify-content: center;
  @media (max-width: 700px) {
    width: 80%;
  }
`;

const ContactInfo = styled(Link)`
  display: flex;
  flex-flow: row;

  width: auto;
  margin: 0 2.5%;

  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    flex-grow: 0.25;

    padding: 2.5%;

    justify-content: center;
  }
  @media (max-width: 500px) {
    flex-grow: 1;
  }
`;

const Contact = props => {
  const { email, address, lat, lng, tel } = props;

  return (
    <ContactWrapper>
      <Title>Nous Contacter</Title>
      <LocationWrapper>
        <ContactInfoWrapper>
          <ContactInfo to="#" disabled>
            <SVG src={mail} alt="mail-icon" width="25px" />
            <ContactText>{email}</ContactText>
          </ContactInfo>
          <ContactInfo to={`tel: +33${tel}`} disabled>
            <SVG src={phone} alt="phone-icon" width="25px" />
            <ContactText>{tel}</ContactText>
          </ContactInfo>
          <ContactInfo to="#" disabled>
            <SVG src={facebook} alt="facebook-icon" width="25px" />
            <ContactText>Mumbai Café</ContactText>
          </ContactInfo>
          <ContactInfo to="#" disabled>
            <SVG src={foodora} alt="foodora-icon" width="35px" />
            <ContactText>Mumbai Café</ContactText>
          </ContactInfo>
          <ContactInfo to="#" disabled>
            <SVG src={instagram} alt="instagram-icon" width="25px" />
            <ContactText>mumbaicafe</ContactText>
          </ContactInfo>
          <ContactInfo to="#" disabled>
            <SVG src={location} alt="localisation-icon" width="25px" />
            <ContactText>{address}</ContactText>
          </ContactInfo>
        </ContactInfoWrapper>
        <MapContainer geo={(lat, lng)} />
      </LocationWrapper>
      <Title>Nous écrire</Title>
      <Mail />
    </ContactWrapper>
  );
};

Contact.defaultProps = {
  email: '',
  address: '',
  tel: '',
  lat: '',
  lng: '',
};

Contact.propTypes = {
  email: PropTypes.string,
  address: PropTypes.string,
  tel: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

export default Contact;
