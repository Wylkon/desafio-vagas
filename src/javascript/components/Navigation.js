import React from 'react';
import {Link, IndexLink} from 'react-router';

const Navigation = () => {
  return (
    <nav className="fi-navbar" role="navigation">
      <div className="fi-hamburguer">
        <span className="fi-hamburguer-text">Menu</span>
        <span className="fi-hamburguer-icon"></span>
      </div>
      <ul>
        <li>
          <IndexLink to="/" activeClassName="selected">
            <span className="icon-svg"><svg><use xlinkHref='#icon-star'/></svg></span>
            Destaques
          </IndexLink>
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

module.exports = Navigation;
