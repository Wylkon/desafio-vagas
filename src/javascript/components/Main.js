import React from 'react';
import { Link, IndexLink } from 'react-router'
require('../../sass/styles.scss');

var Main = React.createClass({
  render: function() {
    return (
      <div className="fi-main">
        <header className="fi-header">
          <div className="fi-wrap-header">
            <h1><IndexLink to="/" className="logo" activeClassName="selected" title="Fictícia Vídeos"><svg><use xlinkHref='#ficticia'/></svg></IndexLink></h1>
            <nav className="fi-navbar" role="navigation">
              <div className="fi-hamburguer">
                <span className="fi-hamburguer-text">Menu</span>
                <span className="fi-hamburguer-icon"></span>
              </div>
              <ul>
                <li><Link to="/destaques" activeClassName="selected"><span className="icon-svg"><svg><use xlinkHref='#icon-star'/></svg></span> Destaques</Link></li>
                <li><Link to="/videos" activeClassName="selected">Vídeos</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
