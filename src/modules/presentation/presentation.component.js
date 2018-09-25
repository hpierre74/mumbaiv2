import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import thali from '../../style/images/mc-thali-1.png';
import dining from '../../style/images/mcbg.jpg';
import cocktailmc from '../../style/images/cocktailmc2.png';
import Text from '../../components/text.component';
import { Title1, Title3 } from '../../components/title.components';
import placeholder from '../../style/images/400x400.png';
import withAnim from '../../components/withAnim.hoc';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;

  width: 100%;
  padding: 1.5%;
`;
const ItemWrapper = styled.div`
  display: flex;

  justify-content: space-around;
  flex-flow: row wrap;
`;

const Title = Title1.extend`
  margin: 0 auto;
  text-transform: lowercase;

  position: relative;
  top: 50%;
`;

const Intro = styled(Text)`
  width: 80%;
  margin: 2.5% auto;

  text-align: justify;
  font-style: italic;
`;

const Card = withAnim(styled.div`
  width: 50%;
`);
const CardImage = styled.img`
  width: 150px;
  height: 150px;

  border-radius: 204px;
  box-shadow: 0px 0px 5px 1px;

  @media (max-width: 1100px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 900px) {
    width: 225px;
    height: 225px;
  }
  @media (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 300px) {
    width: 100px;
    height: 100px;
  }
`;

const Presentation = props => {
  const { presentation: { concept, food } } = props;

  return (
    <Wrapper>
      <Title3>{concept}</Title3>
      <Intro>{food}</Intro>
      <ItemWrapper>
        <Card duration="3" animation="slideInDown">
          <Title>Cocktails</Title>
          <CardImage src={cocktailmc} alt="placeholder" />
        </Card>
        <Card duration="2.5" animation="slideInDown">
          <Title>Food</Title>
          <CardImage src={thali} alt="placeholder" />
        </Card>
        <Card duration="2" animation="slideInDown">
          <Title>Menu</Title>
          <CardImage src={placeholder} alt="placeholder" />
        </Card>
        <Card duration="1.5" animation="slideInDown">
          <Title>Réservation</Title>
          <CardImage src={dining} alt="placeholder" />
        </Card>
      </ItemWrapper>
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
