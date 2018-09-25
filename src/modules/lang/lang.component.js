import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LangWrapper = styled.div`
  width: 80%;
`;
const Language = styled.h4`
  display: inline-block;
  margin: 10%;

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
    /
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
