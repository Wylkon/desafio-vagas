import React from 'react';
import ReactDOM from 'react-dom';
var Router = require('react-router').Router;
import routes from './config/routes';

import { hashHistory } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);
