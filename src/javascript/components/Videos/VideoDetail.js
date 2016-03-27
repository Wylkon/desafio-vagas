import React  from 'react'
import Marked from 'marked';
import VideoInfo from './VideoInfo';

const VideoDetail = ({video, apikey}) => {

  if (!video) {
    return (
      <div>Loading...</div>
    )
  }

  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <VideoInfo selectedVideo={video} apikey={apikey} videoUrl={url} />
  )
}

export default VideoDetail;
