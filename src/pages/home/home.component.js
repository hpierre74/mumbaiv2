import React from 'react';

import NavBar from '../../components/navbar.component';
import Jumbotron from '../../components/jumbotron.component';
import Presentation from '../../modules/presentation/presentation.connector';
import Iconav from '../../components/iconav.component';
import { PageWrapper as HomeWrapper } from '../../components/wrapper.components';

const Home = () => (
  <HomeWrapper>
    <NavBar />
    <Jumbotron />
    <Presentation duration="1.5" animation="slideInUp" />
    <Iconav />
  </HomeWrapper>
);

export default Home;
