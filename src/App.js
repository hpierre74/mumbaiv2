import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import Contact from './pages/contact/contact.component';
import Booking from './pages/booking/booking.page';
import Admin from './pages/admin/admin.component';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/book" component={Booking} />
    <Route path="/admin" component={Admin} />
  </Switch>
);

export default App;
