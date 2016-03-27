import React  from 'react'
import VideoViews from './VideoViews'

const VideoListItem = ({video, handleVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.high.url;
  const videoID = video.id.videoId;

  return (
    <li onClick={() => handleVideoSelect(video)} className="fi-video-item">
      <div className="fi-video-media">
        <img className="fi-video-image" src={imageUrl} />
      </div>
      <div className="fi-video-text">
        <h3 className="fi-video-heading" numberOfLines="">
          { ((video.snippet.title).length > 50) ?
            (((video.snippet.title).substring(0,50-3)) + '...') :
            video.snippet.title }
        </h3>
        <div className="fi-video-views">
          <span className="icon-svg"><svg><use xlinkHref='#icon-views'/></svg></span>
          <VideoViews videoId={videoID} />
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
