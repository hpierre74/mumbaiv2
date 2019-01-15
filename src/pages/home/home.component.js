import React, { lazy, Suspense, memo } from 'react';

const Player = lazy(() => import('../../modules/player/player.connector'));
const Events = lazy(() => import('../../modules/events/events.connector'));
const Presentation = lazy(() => import('../../modules/presentation/presentation.connector'));
const Instagram = lazy(() => import('../../modules/instagram/instagram.connector'));

const Home = () => (
  <div style={{ marginTop: '-40px' }}>
    <Suspense fallback={<div />}>
      <Player />
      <Presentation />
      <Events />
      <Instagram />
    </Suspense>
  </div>
);

export default memo(Home);
