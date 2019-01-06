import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

// import Home from '../../pages/home/home.component';
const Home = lazy(() => import('../../pages/home/home.component'));

const Contact = lazy(() => import('../../pages/contact/contact.component'));
const Booking = lazy(() => import('../../pages/book/book.component'));
const Food = lazy(() => import('../../pages/food/food.component'));
const Cocktails = lazy(() => import('../../pages/cocktails/cocktails.component'));

class ClientRoutes extends React.Component {
  componentDidMount = () => {
    this.props.getComponents();
  };

  render() {
    return (
      <Suspense fallback={<div />}>
        <Route exact path="/" component={props => <Home {...props} />} />
        <Route exact path="/contact" component={props => <Contact {...props} />} />
        <Route exact path="/book" component={props => <Booking {...props} />} />
        <Route exact path="/food" component={props => <Food {...props} />} />
        <Route exact path="/cocktails" component={props => <Cocktails {...props} />} />
      </Suspense>
    );
  }
}

export default ClientRoutes;
