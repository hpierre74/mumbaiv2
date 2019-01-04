import React, { lazy, Suspense } from 'react';

import Splash from '../../modules/splash/splash.connector';

const Player = lazy(() => import('../../modules/player/player.connector'));
const Events = lazy(() => import('../../modules/events/events.connector'));
const Presentation = lazy(() => import('../../modules/presentation/presentation.connector'));

const Home = () => (
  <div>
    <Splash />
    <Suspense fallback={<div />}>
      <Player />
      <Presentation />
      <Events />
    </Suspense>
  </div>
);

export default Home;
