import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { push } from 'connected-react-router/lib/index';

export const renderClientsRoutes = ({ pages, modules }) =>
  Object.values(pages).map(page => {
    const { component, target, path, name } = page;
    const isPageEnabled = modules[target].enabled && component !== 'Home';
    const Component = isPageEnabled ? importPageRoute(target) : null;

    return isPageEnabled ? (
      <Route key={path} name={name} exact path={path} component={props => <Component {...props} />} />
    ) : null;
  });

export const renderAdminRoutes = ({ pages }) =>
  Object.values(pages).map(page => {
    const { target, path, name, enabled } = page;
    const Component = enabled ? importAdminRoute(target) : null;

    return enabled ? (
      <Route key={path} name={name} exact path={path} component={props => <Component {...props} />} />
    ) : null;
  });

export const importPageRoute = target => lazy(() => import(`../pages/${target}/${target}.component`));

export const importAdminRoute = target => lazy(() => import(`../modules/admin/${target}/${target}.connector`));

export const renderRoutes = (pages, components) =>
  Object.values(pages).map(page => (
    <Route key={page.name} exact path={`${page.path}`} component={components[page.name]} />
  ));

export const navigate = destination => dispatch => dispatch(push(destination));

export const pathToTarget = path => (path === '/' ? 'home' : path.replace(/\//gi, ''));
export const targetToPath = target => (target === 'home' ? '/' : `/${target}`);
