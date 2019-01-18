import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, connectRouter, routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import * as serviceWorker from './serviceWorker';

import './style/index.css';

import App from './App';
import reducers from './reducers';
import pageContentMiddleware from './middlewares/pageContent.middleware';
import animationMiddleware from './middlewares/animation.middleware';
import { configInit } from './modules/app/app.action';
import { showSplash } from './modules/splash/splash.action';

import initializeApp from './utils/init';

const history = createHistory();
const routerMiddleware = createRouterMiddleware(history);

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
const store = createStore(
  combineReducers({
    router: connectRouter(history),
    ...reducers,
  }),
  composeEnhancers(applyMiddleware(thunk, routerMiddleware, pageContentMiddleware, animationMiddleware)),
);

store.dispatch(showSplash());

const init = async () => {
  const config = await initializeApp();
  store.dispatch(configInit(config));

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App palette={config.style.client} />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );

  serviceWorker.unregister();
};

init();
