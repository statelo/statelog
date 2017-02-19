import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import './index.css';
import { App, Home, About, Tutorials, Blogs, RegistrationPage, LoginPage } from './containers/index';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="/blogs" component={ Blogs }></Route>
        <Route path="/tutorials" component={ Tutorials } />
        <Route path="/about" component={ About } />
        <Route path="/signup" component={ RegistrationPage } />
        <Route path="/login" component={ LoginPage } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
