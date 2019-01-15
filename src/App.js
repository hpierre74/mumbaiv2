import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './style/mui';
import NavBar from './modules/navbar/navbar.connector';

import Admin from './pages/admin/admin.component';
import Splash from './modules/splash/splash.connector';
import UserRoutes from './modules/routes/userRoutes.connector';

const Toaster = lazy(() => import('./modules/toaster/toast.connector'));

const App = () => (
  <Fragment>
    <MuiThemeProvider theme={{ ...theme, desktop: { navbar: false } }}>
      <NavBar>
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

export default App;
