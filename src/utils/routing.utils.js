import React from 'react';

import { Route } from 'react-router-dom';
import { push } from 'connected-react-router/lib/index';

export const renderRoutes = (pages, components) =>
  Object.values(pages).map(page => (
    <Route key={page.name} exact path={`${page.path}`} component={components[page.name]} />
  ));

export const navigate = destination => dispatch => dispatch(push(destination));
