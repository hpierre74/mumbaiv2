// import React from 'react'
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-flow: row wrap;

  width: 50%;
  margin: 0 auto;
  padding: 2.5%;

  justify-content: space-around;

  border: 1px solid white;
  border-radius: 4px;
`;

export const Input = styled.input`
  width: ${props => (props.width ? props.width : '45%')};
  margin: 1%;
  padding: 1%;

  border: 1px solid white;
  border-radius: 4px;
  background: transparent;

  color: white;
`;

export const Textarea = styled.textarea``;
