import React, { lazy, Suspense } from 'react';

import { PageWrapper as HomeWrapper } from '../../components/wrapper.components';

import Splash from '../../modules/splash/splash.connector';

const Player = lazy(() => import('../../modules/player/player.connector'));
const Events = lazy(() => import('../../modules/events/events.connector'));
const Presentation = lazy(() => import('../../modules/presentation/presentation.connector'));

const Home = () => (
  <HomeWrapper>
    <Splash />
    <Suspense fallback={<div />}>
      <Player />
      <Presentation />
      <Events />
    </Suspense>
  </HomeWrapper>
);

export default Home;
