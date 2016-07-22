import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Menu } from './routes/menu';
import { Home } from './routes/home';
import { About } from './routes/about';

import './style/main.scss';

render((
  <Router history={hashHistory}>
    <Route path="/" component={Menu}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))