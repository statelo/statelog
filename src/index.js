import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import './index.css';
import { App, Home, About, Tutorials } from './containers/index';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="/tutorials" component={ Tutorials } />
      <Route path="/about" component={ About } />
    </Route>
  </Router>,
  document.getElementById('root')
);
