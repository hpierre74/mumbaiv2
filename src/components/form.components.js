import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Form = styled.form`
  display: flex;
  flex-flow: row wrap;

  margin: 0 2.5%;
  padding: 2.5%;

  justify-content: space-around;

  border: 1px solid white;
  border-radius: 4px;
`;

export const Select = styled.select`
  width: ${props => (props.width ? props.width : '45%')};
  flex-grow: 1;

  margin: 2.5%;
  padding: 2.5%;

  border: none;
  border-bottom: 1px solid white;
  background: transparent;

  color: ${({ value }) => (value ? 'white' : 'grey')};
`;

export const Input = styled.input`
  width: ${props => (props.width ? props.width : '45%')};
  flex-grow: 1;

  margin: 2.5%;
  padding: 2.5%;

  border: none;
  border-bottom: 1px solid white;
  background: transparent;

  color: ${({ value }) => (value ? 'white' : 'grey')};
`;

export const Option = styled.option`
  width: ${props => (props.width ? props.width : '45%')};
  flex-grow: 1;

  margin: 2.5%;
  padding: 2.5%;

  border: none;
  border-bottom: 1px solid white;
  background: transparent;

  color: white;
`;

export const Textarea = styled.textarea`
  width: 100%;

  margin: 5% 0;
  padding: 2.5%;

  border: 1px solid white;
  border-radius: 4px;
  background: transparent;

  color: white;
`;

const BaseButton = styled.button`
  padding: 20px;

  border: 1px solid white;
  border-radius: 4px;

  background: transparent;

  color: white;
`;

export const Button = props => <BaseButton>{props.value}</BaseButton>;
Button.propTypes = {
  value: PropTypes.string.isRequired,
};
