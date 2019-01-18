import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { renderClientsRoutes } from '../../utils/routing.utils';

const Home = lazy(() => import('../../pages/home/home.component'));

const UserRoutes = ({ initialized, modules, pages }) => (
  <Suspense fallback={<div />}>
    <Route exact path="/" component={props => <Home {...props} />} />
    {initialized && renderClientsRoutes({ pages, modules })}
  </Suspense>
);

UserRoutes.propTypes = {
  initialized: PropTypes.bool.isRequired,
  modules: PropTypes.shape({}).isRequired,
  pages: PropTypes.shape({}).isRequired,
};

export default UserRoutes;
