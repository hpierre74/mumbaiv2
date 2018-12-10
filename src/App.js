import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './style/mui';
import NavBar from './modules/navbar/navbar.connector';
import Home from './pages/home/home.component';
import Contact from './pages/contact/contact.connector';
import Booking from './pages/booking/booking.page';
import Admin from './pages/admin/admin.component';
import Toaster from './modules/toaster/toast.connector';

const App = () => (
  <Fragment>
    <MuiThemeProvider theme={theme}>
      <NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="/home" exact to="/" />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/book" component={Booking} />
        </Switch>
        <Toaster />
      </NavBar>
    </MuiThemeProvider>
    <Route path="/admin" component={Admin} />
  </Fragment>
);

export default App;
