import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore'

// tslint:disable-next-line: no-unused-variable
const globalStyles = require("./app.global.css") as {
  // When add a class name in StyleSheet, update the name here
  // like: "sampleClassName": string,
};

const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
