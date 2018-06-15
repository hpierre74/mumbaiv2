import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { slideInDown, slideInRight, slideInLeft } from 'react-animations';

import thali from '../../style/images/mc-thali-1.png';
import Text from '../../components/text.component';
import { Title3 } from '../../components/title.components';
import { SvgImg } from '../../components/svg.component';

const slideInDownAnim = keyframes`${slideInDown}`;
const slideInLeftAnim = keyframes`${slideInLeft}`;
const slideInRightAnim = keyframes`${slideInRight}`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;

  width: 100%;
  padding: 1.5%;
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-flow: ${window.innerWidth > 600 ? 'row wrap' : 'column'};

  width: 100%;
  padding: 1.5%;
`;

const Title = Title3.extend`
  width: ${window.innerWidth > 600 ? '70%' : '100%'};
  margin: 0 auto;
  animation: 3.5s ${slideInDownAnim};
`;
const TextAside = styled.div`
  width: ${window.innerWidth > 600 ? '50%' : '100%'};
  line-height: ${window.innerWidth > 600 ? `4em` : '1.6em'};

  padding: 0 5% 0 0;

  text-align: justify;
  animation: 1.5s ${slideInRightAnim};
`;

const PreSVG = SvgImg.extend`
  box-shadow: 0px 0px 5px 1px;

  border-radius: 4px;
  animation: 1.5s ${slideInLeftAnim};
`;

class Presentation extends Component {
  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    presentation: PropTypes.shape({
      bar: PropTypes.string,
      food: PropTypes.string,
      tapas: PropTypes.string,
      concept: PropTypes.string,
    }).isRequired,
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      concept: nextProps.presentation.concept,
      bar: nextProps.presentation.bar,
      food: nextProps.presentation.food,
      tapas: nextProps.presentation.tapas,
    };
  }

  state = {
    concept: '',
    bar: '',
    tapas: '',
    food: '',
  };

  render() {
    const { concept, bar, tapas, food } = this.state;

    return (
      <Wrapper>
        <ItemWrapper>
          <Title>{concept}</Title>
        </ItemWrapper>
        {concept && (
          <ItemWrapper>
            <TextAside>
              <Text>{food}</Text>
              <Text>{tapas}</Text>
              <Text>{bar}</Text>
            </TextAside>
            <PreSVG src={thali} width={window.innerWidth > 600 ? '50%' : '100%'} alt="thali" />
          </ItemWrapper>
        )}
      </Wrapper>
    );
  }
}

export default Presentation;
