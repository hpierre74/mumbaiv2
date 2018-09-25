import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import firebase from 'firebase/app';

import 'normalize.css';
import './style/index.css';

import App from './App';
import theme from './style/theme';
import reducers from './reducers';
import pageContentMiddleware from './middlewares/pageContent.middleware';
import { configInit } from './modules/app/app.action';

const history = createHistory();
const routerMiddleware = createRouterMiddleware(history);

/* eslint-disable-next-line no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  composeEnhancers(applyMiddleware(thunk, routerMiddleware, pageContentMiddleware)),
);

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_APIKEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_DB}`,
  projectId: `${process.env.REACT_APP_FIREBASE_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING}`,
};

firebase.initializeApp(config);
store.dispatch(configInit());
const start = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={{ ...theme }}>
          <App />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );
};

start();
