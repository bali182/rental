import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { SearchBox } from './components/search-box';
import { Home } from './components/home';
import { Menu } from './components/menu';

import 'whatwg-fetch';

import 'semantic-ui-card/card.css';
import 'semantic-ui-icon/icon.css';
import 'semantic-ui-grid/grid.css';
import 'semantic-ui-menu/menu.css';
import 'semantic-ui-input/input.css';
import 'semantic-ui-search/search.css';
import './style.css';

class About extends Component {
  render() {
    return <div>
      <h2>Index!</h2>
    </div>
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={Menu}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))