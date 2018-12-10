import styled from 'styled-components';

export const Title1 = styled.h1`
  line-height: 30px;

  font-size: 30px;
  font-weight: 800;
  text-transform: uppercase;
`;

export const Title3 = styled.h3`
  line-height: 30px;

  text-transform: uppercase;
  font-size: 22px;
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
`;
