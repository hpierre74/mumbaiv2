import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { slideInDown, rotateIn, slideInLeft } from 'react-animations';
import { Link } from 'react-router-dom';

import Iconav from '../../components/iconav.component';
import Text from '../../components/text.component';
import { Title3 } from '../../components/title.components';
import { Form, Input, Textarea } from '../../components/form.components';
import { PageWrapper as ContactWrapper } from '../../components/wrapper.components';
import NavBar from '../../components/navbar.component';
import mumbaigmap from '../../style/images/mumbaicafelyon.png';
import location from '../../style/images/location.svg';
import mail from '../../style/images/contact.svg';
import phone from '../../style/images/phone-call.svg';
import facebook from '../../style/images/facebook.svg';
import instagram from '../../style/images/instagram.svg';
import SVG from '../../components/svg.component';

const slideInDownAnim = keyframes`${slideInDown}`;
const rotateInAnim = keyframes`${rotateIn}`;
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
  padding: 15% 0 10%;
  animation: 1.5s ${slideInDownAnim};
`;

const ContactText = styled(Text)`
  width: 90%;
  padding: 2.5%;

  text-align: left;
  @media (max-width: 700px) {
    display: none;
    &:focus {
      display: block;
    }
  }
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

const ContactInfo = styled.div`
  display: flex;
  flex-flow: row;
  flex-grow: 1;

  justify-content: space-between;
  align-items: center;
  animation: 1s ${slideInLeftAnim};
  @media (max-width: 700px) {
    flex-grow: 0.25;

    justify-content: center;
    padding: 2.5%;
  }
  @media (max-width: 500px) {
    flex-grow: 1;
  }
`;

const Map = styled.img`
  box-shadow: 0px 0px 5px 1px;

  width: 400px;
  height: 270px;

  border-radius: 4px;
  animation: 1s ${rotateInAnim};
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
            <ContactInfo>
              <SVG src={mail} width="25px" />
              <ContactText style={{ display: 'block' }}>1mumbaicafe@gmail.com</ContactText>
            </ContactInfo>
            <ContactInfo>
              <SVG src={phone} width="25px" />
              <ContactText>0967876545</ContactText>
            </ContactInfo>
            <ContactInfo>
              <SVG src={facebook} width="25px" />
              <ContactText>Mumbai Café</ContactText>
            </ContactInfo>
            <ContactInfo>
              <SVG src={instagram} width="25px" />
              <ContactText>mumbaicafe</ContactText>
            </ContactInfo>
            <ContactInfo>
              <SVG src={location} width="25px" />
              <ContactText>6 rue Sainte-Catherine, 69001, LYON</ContactText>
            </ContactInfo>
          </ContactInfoWrapper>
          <Link target="_blank" to="https://google.com">
            <Map src={mumbaigmap} />
          </Link>
        </LocationWrapper>
        <Title>Nous écrire</Title>
        <Form>
          <Input width="100%" placeholder="your firstname" />
          <Input placeholder="your lastname" />
          <Input placeholder="your phone number" />
          <Textarea />
        </Form>
        <Iconav />
      </ContactWrapper>
    );
  }
}

export default Contact;
