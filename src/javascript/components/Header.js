var React = require('react');
var Router = require( 'react-router');
var Link = Router.Link;
var IndexLink = Router.IndexLink;
var Navigation = require('./Navigation');
var SearchBar = require('./SearchBar');

var Header = React.createClass({
  render: function() {
    return (
      <header className="fi-header">
        <div className="fi-wrap-header">
          <h1><IndexLink to="/" className="logo" activeClassName="selected" title="Fictícia Vídeos"><svg><use xlinkHref='#ficticia'/></svg></IndexLink></h1>
          <Navigation />
          <SearchBar />
        </div>
      </header>
    )
  }
});

module.exports = Header;
