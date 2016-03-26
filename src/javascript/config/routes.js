var React      = require('react');
var Main       = require('../components/Main');
var Home       = require('../components/Home');
var Videos     = require('../components/Videos');
var Search     = require('../components/Search');
var NotFound   = require('../components/NotFound');
var Router     = require('react-router');
var Route      = Router.Route;
var IndexRoute = Router.IndexRoute;
var browserHistory = Router.browserHistory;

module.exports = (
  <Route path="/" component={Main}  history={browserHistory}>
    <IndexRoute component={Home} />
    <Route path="videos" component={Videos} />
    <Route path="destaques" component={Home} />
    <Route path="search/:term" component={Search} />
    <Route path="*" component={NotFound}/>
  </Route>
);
