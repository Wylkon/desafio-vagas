var React = require('react');
var Router = require( 'react-router');
var Link = Router.Link;

var Navigation = React.createClass({
  render: function() {
    return (
      <nav className="fi-navbar" role="navigation">
        <div className="fi-hamburguer">
          <span className="fi-hamburguer-text">Menu</span>
          <span className="fi-hamburguer-icon"></span>
        </div>
        <ul>
          <li>
            <Link to="/destaques" activeClassName="selected">
              <span className="icon-svg"><svg><use xlinkHref='#icon-star'/></svg></span>
              Destaques
            </Link>
          </li>
          <li>
            <Link to="/videos" activeClassName="selected">
              <span className="icon-svg"><svg><use xlinkHref='#icon-video'/></svg></span>
              Vídeos
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
});

module.exports = Navigation;
