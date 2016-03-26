import React from 'react';
import {IndexLink} from 'react-router';

const NotFound = () => {
  return (
    <div className="fi-404-container">
        <h2 className="fi-headline">404</h2>
        <p>Infelizmente o que você procura não está aqui.</p>
        <IndexLink to="/">Click aqui para voltar para a Home.</IndexLink>
    </div>
  )
}
export default NotFound;
