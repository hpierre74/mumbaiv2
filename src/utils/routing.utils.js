import React from 'react';

import { Route } from 'react-router-dom';
import { push } from 'connected-react-router/lib/index';

export const renderRoutes = (path, pages, components) =>
  pages.map(page => <Route key={page} exact path={`${path}${page}`} component={components[page]} />);

export const renderRoutess = (pages, components) =>
  pages.map(page => (
    <Route key={page.name} exact path={`${page.path}`} component={components[page.target.charAt(0).toUpperCase()]} />
  ));

export const navigate = destination => dispatch => dispatch(push(destination));
