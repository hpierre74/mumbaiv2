import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './style/mui';
import NavBar from './modules/navbar/navbar.connector';

import Home from './pages/home/home.component';
import Admin from './pages/admin/admin.component';

const Contact = lazy(() => import('./pages/contact/contact.connector'));
const Booking = lazy(() => import('./pages/booking/booking.page'));
const Toaster = lazy(() => import('./modules/toaster/toast.connector'));
const Food = lazy(() => import('./pages/food/food.component'));
const Cocktails = lazy(() => import('./pages/cocktails/cocktails.component'));

const App = () => (
  <Fragment>
    <MuiThemeProvider theme={theme}>
      <NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="/home" to="/" />
          <Suspense fallback={<div />}>
            <Route exact path="/contact" component={props => <Contact {...props} />} />
            <Route exact path="/book" component={props => <Booking {...props} />} />
            <Route exact path="/food" component={props => <Food {...props} />} />
            <Route exact path="/cocktails" component={props => <Cocktails {...props} />} />
          </Suspense>
        </Switch>
        <Suspense fallback={<div />}>
          <Toaster />
        </Suspense>
      </NavBar>
    </MuiThemeProvider>
    <Switch>
      <Route path="/admin/" component={Admin} />
    </Switch>
  </Fragment>
);

export default App;
