import React from 'react';
import styled, { keyframes } from 'styled-components';
import shaker from '../../style/images/shaker.svg';
import glass from '../../style/images/empty-cocktail-glass.svg';

const h = window.innerHeight;
const w = window.innerWidth;

const animationShaker = keyframes`
  0% {
    width: 100px;
    height: 100px;

    position: absolute;
    top: 33vh;
    left: 44vw;
  }

  2% {
    top: 26vh;
    left: 47vw;

    transform: rotate(15deg);
  }
  4% {
    top: 31vh;
    left: 45vw;
  }

  6% {
    top: 25vh;
    left: 48vw;

    transform: rotate(13deg);
  }
  8% {
    top: 32vh;
    left: 44vw;
  }
  9% {
    top: 26vh;
    left: 48vw;

    transform: rotate(15deg);
  }

  12% {
    top: 33vh;
    left: 42vw;
  }

  14% {
    top: 20vh;
    left: 46vw;

    transform: rotate(13deg);
  }
  16% {
    top: 37vh;
    left: 41vw;

    transform: rotate(13deg);
  }
  19% {
    top: 25vh;
    left: 46vw;

    transform: rotate(-20deg);
  }
  21% {
    transform: rotate(50deg);
  }
  23% {
    transform: rotate(-10deg);
  }
  24% {
    transform: rotate(30deg);
  }
  26% {
    top: 25vh;
    left: 46vw;

    transform: rotate(10deg);
  }
  40% {
    top: 22vh;
    left: 51vw;

    transform: rotate(15 0deg);
  }
  45% {
    top: 21vh;
    left: 53vw;

    transform: rotate(180deg);
  }
  75% {
    top: 21vh;
    left: 53vw;

    transform: rotate(180deg);
  }
  80% {
    top: 25vh;
    left: 53vw;

    transform: rotate(180deg);
  }
  90% {
    top: 20vh;
    left: 53vw;

    transform: rotate(180deg);
  }
  100% {
    /*
    top: 21vh;
    left: 45vw;

    transform: rotate(360deg); */
  }
`;

const Shaker = styled.img`
  width: 100px;
  height: 100px;

  position: absolute;
  top: 33vh;
  left: 45vw;

  animation: 5s ${animationShaker} infinite linear;
`;

const waterAnim = keyframes`
0% {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0px 0px 0 0px;
  border-color: #ffffff transparent transparent transparent;
  border-radius: 4px;
  position: absolute;
  top: 33vh;
  left: 54.5vw;
}
44% {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0px 0px 0 0px;
  border-color: #ffffff transparent transparent transparent;
  border-radius: 4px;
  position: absolute;
  top: 33vh;
  left: 54.5vw;
}
45% {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 15px 0 10px;
  border-color: #ffffff transparent transparent transparent;
  border-radius: 4px;
  position: absolute;
  top: 33.25vh;
  left: 54.5vw;
}
60% {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 15px 0 15px;
  border-color: #ffffff transparent transparent transparent;
  border-radius: 4px;
  position: absolute;
  top: 33vh;
  left: 54.5vw;
}
100% {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 19px 15px 0 15px;
  border-color: #ffffff transparent transparent transparent;
  border-radius: 4px;
  position: absolute;
  top: 32.5vh;
  left: 54.5vw;
}
`;

const Water = styled.div`
  animation: 5s ${waterAnim} infinite linear;
  /* width: 0;
  height: 0;
  border-style: solid;
  border-width: 19px 15px 0 15px;
  border-color: #ffffff transparent transparent transparent;
  border-radius: 4px;
  position: absolute;
  top: 32.5vh;
  left: 54.5vw; */
`;

const Glass = styled.img`
  width: 50px;
  height: 50px;

  position: absolute;
  top: 32vh;
  left: 54vw;

  /* animation: 1s ${animationShaker}; */
`;
function Try() {
  return (
    <div>
      <Water />
      <Shaker src={shaker} />
      <Glass src={glass} />
    </div>
  );
}