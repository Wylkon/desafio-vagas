import React from 'react';
import ResultsList from '../Search/ResultsList';

const Results = ({videos}) => {
  return (
    <div>
      <div className="fi-video-list"><ResultsList term={""} videos={videos} /></div>
    </div>
  )
}

Results.propTypes = {
  term: React.PropTypes.string.isRequired,
  videos: React.PropTypes.array.isRequired
}

export default Results;
