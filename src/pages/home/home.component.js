import React, { lazy, Suspense } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { PageWrapper as HomeWrapper } from '../../components/wrapper.components';

const Player = lazy(() => import('../../components/player.component'));
const Events = lazy(() => import('../../modules/events/events.connector'));
const Presentation = lazy(() => import('../../modules/presentation/presentation.connector'));

const Home = () => (
  <HomeWrapper>
    <Suspense fallback={<CircularProgress />}>
      <Player />
      <Presentation />
      <Events />
    </Suspense>
  </HomeWrapper>
);

export default Home;
