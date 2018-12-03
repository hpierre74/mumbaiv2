import React from 'react';
import styled from 'styled-components';
/* eslint-disable */
const CardContainer = styled.div`
  display: flex;
  flex-flow: row;

  @media (max-width: 700px) {
    flex-flow: column;
  }
`;

const CardList = props => <CardContainer>{props.children}</CardContainer>;

export default CardList;
