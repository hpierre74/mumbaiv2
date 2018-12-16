import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './style/mui';
import NavBar from './modules/navbar/navbar.connector';

import Home from './pages/home/home.component';
import Contact from './pages/contact/contact.connector';
import Booking from './pages/booking/booking.page';
import Toaster from './modules/toaster/toast.connector';
import Admin from './pages/admin/admin.component';
import Food from './pages/food/food.component';
import Cocktails from './pages/cocktails/cocktails.component';

const App = () => (
  <Fragment>
    <MuiThemeProvider theme={theme}>
      <NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="/home" to="/" />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/book" component={Booking} />
          <Route exact path="/food" component={Food} />
          <Route exact path="/cocktails" component={Cocktails} />
        </Switch>
        <Toaster />
      </NavBar>
    </MuiThemeProvider>
    <Switch>
      <Route path="/admin" component={Admin} />
    </Switch>
  </Fragment>
);

export default App;
