import React, { lazy, Suspense } from 'react';

const Player = lazy(() => import('../../modules/player/player.connector'));
const Events = lazy(() => import('../../modules/events/events.connector'));
const Presentation = lazy(() => import('../../modules/presentation/presentation.connector'));
const Instagram = lazy(() => import('../../modules/instagram/instagram.connector'));

const Home = () => (
  <div>
    <Suspense fallback={<div />}>
      <Player />
      <Presentation />
      <Events />
      <Instagram />
    </Suspense>
  </div>
);

export default Home;
