import React from 'react';
import Header from './Header';
require('../../sass/styles.scss');

const Main = ({children}) => {
  return (
    <div className="fi-main">
      <Header />
      <div className="fi-container">
        {children}
      </div>
    </div>
  )
}

export default Main;
