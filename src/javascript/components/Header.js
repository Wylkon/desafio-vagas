import React from 'react';
import {IndexLink} from 'react-router';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

const Header = ({history}) => {
  return (
    <header className="fi-header">
      <div className="fi-wrap-header">
        <h1>
          <IndexLink to="/" className="logo" activeClassName="selected" title="Fictícia Vídeos">
            <svg><use xlinkHref='#ficticia'/></svg>
          </IndexLink>
        </h1>
        <Navigation />
        <SearchBar history={history}/>
      </div>
    </header>
  )
}

export default Header;
