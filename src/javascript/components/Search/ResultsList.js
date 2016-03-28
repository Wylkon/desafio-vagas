import React from 'react';
import VideoViews from '../Videos/VideoViews';
import VideoModal from '../Videos/VideoModal';

class ResultsList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      video: []
    }
  }

  bindModal(video){
    this.setState({video: video});
  }

  closeModal(){
    $('.fi-modal').addClass('disabled');
    $('.fi-modal-overlay').addClass('disabled');
    $('.embed-responsive-item').clone().appendTo('.fi-responsive-16by9');
    $('.embed-responsive-item')[0].remove();
  }

  render(){
    return (
      <div>
        <ul className="fi-list-group">
          {this.props.videos.map((video, i) => (
            <li className="fi-video-item" key={i} onClick={(onClick) => this.bindModal(video)}>
              <div className="fi-video-media">
                {video.snippet.thumbnails.high.url && <img className="fi-video-image" src={video.snippet.thumbnails.high.url} />}
              </div>
              <div className="fi-video-text">
                {video.snippet.title && <h3 className="fi-video-heading">
                  {((video.snippet.title).length > 36) ? (((video.snippet.title).substring(0,36-3)) + '...') : video.snippet.title}
                </h3>}
                <div className="fi-video-views">
                  <span className="icon-svg"><svg><use xlinkHref='#icon-views'/></svg></span>
                  <VideoViews videoId={video.id.videoId} />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <VideoModal video={this.state.video}/>
        <div className="fi-modal-overlay disabled" onClick={() => this.closeModal()}/>
      </div>
    )
  }
}

ResultsList.propTypes = {
  term: React.PropTypes.string.isRequired,
  videos: React.PropTypes.array.isRequired
}

export default ResultsList;
