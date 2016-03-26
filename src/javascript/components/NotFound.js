var React = require('react');
var Router = require( 'react-router');
var IndexLink = Router.IndexLink;

var NotFound = React.createClass({
  render: function() {
    return (
      <div className="fi-404-container">
          <h2 className="fi-headline">404</h2>
          <p>Infelizmente o que você procura não está aqui.</p>
          <IndexLink to="/">Click aqui para voltar para a Home.</IndexLink>
      </div>
    )
  }
});

module.exports = NotFound;
