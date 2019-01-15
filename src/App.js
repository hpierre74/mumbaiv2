import React, { lazy, Suspense, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { createTheme } from './style/mui';
import NavBar from './modules/navbar/navbar.connector';

import Admin from './pages/admin/admin.component';
import Splash from './modules/splash/splash.connector';
import UserRoutes from './modules/routes/userRoutes.connector';

const Toaster = lazy(() => import('./modules/toaster/toast.connector'));

const App = props => (
  <Fragment>
    <MuiThemeProvider theme={createTheme(props.theme)}>
      <NavBar desktop={props.theme.navbar.desktop}>
        <Switch>
          <UserRoutes />
        </Switch>
        <Suspense fallback={<div />}>
          <Toaster />
        </Suspense>
      </NavBar>
      <Splash />
    </MuiThemeProvider>
    <Switch>
      <Route path="/admin/" component={Admin} />
    </Switch>
  </Fragment>
);

App.propTypes = {
  theme: PropTypes.shape({
    navbar: PropTypes.shape({
      desktop: PropTypes.bool,
    }),
  }).isRequired,
};

export default App;
