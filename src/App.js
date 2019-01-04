import React, { lazy, Suspense, Fragment, Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './style/mui';
import NavBar from './modules/navbar/navbar.connector';

import Home from './pages/home/home.component';
import Admin from './pages/admin/admin.component';
import { renderRoutes } from './utils/routing.utils';

const Contact = lazy(() => import('./pages/contact/contact.connector'));
const Booking = lazy(() => import('./pages/booking/booking.page'));
const Toaster = lazy(() => import('./modules/toaster/toast.connector'));
const Food = lazy(() => import('./pages/food/food.component'));
const Cocktails = lazy(() => import('./pages/cocktails/cocktails.component'));

const components = [
  props => <Contact {...props} />,
  props => <Booking {...props} />,
  props => <Food {...props} />,
  props => <Cocktails {...props} />,
];
class Appp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
    };
  }

  async componentDidMount() {
    await Promise.all([Object.values(this.props.pages).map(page => this.getComponent(page))]);
  }

  async getComponent(component) {
    return import(`./pages/${component}/${component}.connector.js`).then(module =>
      this.setState(state => ({
        [component]: module.default,
        pages: [...state.pages, component],
      })),
    );
  }

  renderClientRoutes = pages => {
    if (!pages) {
      return;
    }

    return renderRoutes('', pages, this.state);
  };
}

const App = () => (
  <Fragment>
    <MuiThemeProvider theme={theme}>
      <NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="/home" to="/" />
          <Suspense fallback={<div />}>
            {/* {renderRoutes} */}
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
