import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import './index.css';
import { App, Home, About, Tutorials, First } from './containers/index';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from './reducers/index';

export const store = createStore(rootReducer, applyMiddleware(thunk));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="/tutorials" component={ Tutorials } />
        <Route path="/about" component={ About } />
        <Route path="/first-deployment" component={ First } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
