import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: ${window.innerWidth > 600 ? '80%' : '95%'};
  margin: 0 auto;

  background: #0a0a0a;
`;

export const FlexColumWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;
