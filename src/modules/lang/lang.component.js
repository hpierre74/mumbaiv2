import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LangWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-flow: row;
  align-items: center;
  position: absolute;
  top: 0;
  left: 90vw;
  @media (max-width: 700px) {
    left: 80vw;
  }
`;
const Language = styled.h4`
  cursor: pointer;
`;

const Lang = props => (
  <LangWrapper>
    <Language
      style={props.currentLang === 'fr' ? { textDecoration: 'underline' } : { color: 'gray' }}
      onClick={() => props.switchContent('fr')}
    >
      FR
    </Language>
    |
    <Language
      style={props.currentLang === 'en' ? { textDecoration: 'underline' } : { color: 'gray' }}
      onClick={() => props.switchContent('en')}
    >
      EN
    </Language>
  </LangWrapper>
);

Lang.propTypes = {
  switchContent: PropTypes.func.isRequired,
  currentLang: PropTypes.string.isRequired,
};

export default Lang;
