import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  background: #25272b;
  line-height: 50px;

  color: white;
`;

export const TBody = styled.tbody``;

export const Th = styled.th`
  flex-grow: 1;
  flex-basis: 0;
`;

export const Tr = styled.tr`
  display: flex;
  line-height: 25px;
  padding: 1%;

  justify-content: space-around;
`;

export const Td = styled.td`
  flex-grow: 1;
  flex-basis: 0;
`;
