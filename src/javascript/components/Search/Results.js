import React from 'react';
import ResultsList from './ResultsList';

const Results = ({term, videos}) => {
  if (videos.length === 0) {
    return (
      <div>
        <h2 className="fi-headline">Nenhum resultado encontrado para: "{term}"</h2>
      </div>
    )
  }

  return (
    <div>
      <h2 className="fi-headline">Resultados para: "{term}"</h2>
      <div className="fi-video-list"><ResultsList term={term} videos={videos} /></div>
    </div>
  )
}

Results.propTypes = {
  term: React.PropTypes.string.isRequired,
  videos: React.PropTypes.array.isRequired
}

export default Results;
