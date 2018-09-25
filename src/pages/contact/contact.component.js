import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { slideInDown, slideInLeft } from 'react-animations';
import { Link } from 'react-router-dom';

import MapContainer from '../../components/LeafMap.component';
import { PageWrapper as ContactWrapper } from '../../components/wrapper.components';
import NavBar from '../../components/navbar.component';
import Mail from '../../modules/mail/mail.connector';
import { Title3 } from '../../components/title.components';
import Text from '../../components/text.component';
import Iconav from '../../components/iconav.component';
import location from '../../style/images/location.svg';
import mail from '../../style/images/contact.svg';
import phone from '../../style/images/phone-call.svg';
import facebook from '../../style/images/facebook.svg';
import foodora from '../../style/images/foodora.svg';
import instagram from '../../style/images/instagram.svg';
import SVG from '../../components/svg.component';

const slideInDownAnim = keyframes`${slideInDown}`;
const slideInLeftAnim = keyframes`${slideInLeft}`;

const LocationWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  padding: 2.5%;

  justify-content: center;
`;

const Title = Title3.extend`
  width: ${window.innerWidth > 600 ? '70%' : '100%'};
  margin: 0 auto;
  padding: 5% 0;
  animation: 1.5s ${slideInDownAnim};
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
  animation: 1s ${slideInLeftAnim};
  @media (max-width: 700px) {
    flex-grow: 0.25;

    padding: 2.5%;

    justify-content: center;
  }
  @media (max-width: 500px) {
    flex-grow: 1;
  }
`;

class Contact extends Component {
  //   static propTypes = {
  //     /* eslint-disable react/no-unused-prop-types */
  //     contact: PropTypes.shape({
  //       location: PropTypes.shape({
  //         adress: PropTypes.string,
  //         city: PropTypes.string,
  //         zipcode: PropTypes.string,
  //       }).isRequired,
  //     }).isRequired,
  //   };

  //   static getDerivedStateFromProps(nextProps) {
  //     return {};
  //   }

  state = {};

  render() {
    // const {} = this.state;

    return (
      <ContactWrapper>
        <NavBar />
        <Title>Nous Contacter</Title>
        <LocationWrapper>
          <ContactInfoWrapper>
            <ContactInfo to="#" disabled>
              <SVG src={mail} alt="mail-icon" width="25px" />
              <ContactText>1mumbaicafe@gmail.com</ContactText>
            </ContactInfo>
            <ContactInfo to="tel: +33967876545" disabled>
              <SVG src={phone} alt="phone-icon" width="25px" />
              <ContactText>0967876545</ContactText>
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
              <ContactText>6 rue Sainte-Catherine, 69001, LYON</ContactText>
            </ContactInfo>
          </ContactInfoWrapper>
          <MapContainer />
        </LocationWrapper>
        <Title>Nous écrire</Title>
        <Mail />
        <Iconav />
      </ContactWrapper>
    );
  }
}
export default Contact;
