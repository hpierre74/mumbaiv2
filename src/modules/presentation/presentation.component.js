import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../../components/text.component';
import { Title3 } from '../../components/title.components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;

  width: 100%;
  height: 40vh;
  padding: 5vh 0 1.5%;
  @media (max-width: 700px) {
    height: 50vh;
    padding: 1%;
  }
`;

const WhatWeAre = styled(Title3)`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
`;

const Intro = styled(Text)`
  width: 80%;
  margin: 2.5% auto;

  text-align: justify;
  font-style: italic;
`;

const Presentation = props => {
  const { presentation: { concept, food } } = props;

  return (
    <Wrapper>
      <WhatWeAre>{concept}</WhatWeAre>
      <Intro>{food}</Intro>
    </Wrapper>
  );
};

Presentation.defaultProps = {
  presentation: {
    concept: null,
    food: null,
  },
};

Presentation.propTypes = {
  presentation: PropTypes.shape({
    concept: PropTypes.string,
    food: PropTypes.string,
  }),
};

export default Presentation;
