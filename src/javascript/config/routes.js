import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Videos from '../components/Videos.js';
import Search from '../components/Search';
import NotFound from '../components/NotFound';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <Route path="videos" component={Videos} />
    <Route path="destaques" component={Home} />
    <Route path="search/:term" component={Search} />
    <Route path="*" component={NotFound}/>
    <IndexRoute component={Home} />
  </Route>
);
