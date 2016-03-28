import React from 'react';
import YTSearch from 'youtube-search-channel';
import VideoDetail from './Videos/VideoDetail';
import VideoList from './Videos/VideoList';
const ApiKey = 'AIzaSyBMVaFEeyzGrPhY-sjmJZprqZrJj2qbeQU';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null,
      videos: [],
      nextPageToken: ' ',
      term: ' '
    };

    this.videoSearch(' ');
  }
  videoSearch(term) {
    YTSearch({key: ApiKey, term: term, channelId: 'UCqhnX4jA0A5paNd1v-zEysw', maxResults: 4, nextPageToken: this.state.nextPageToken}, videos => {
      this.setState({
        videos: this.state.videos.concat(videos.items),
        term: term,
        selectedVideo: videos.items[0],
        nextPageToken: videos.nextPageToken ? videos.nextPageToken : null
      });
      setTimeout(function () {
        $('.fi-wrap-load').removeClass('loading');
      }, 600);
   });
  }

  loadMore(){
    this.videoSearch(' ');
    $('.fi-video-list').addClass('fi-scroll');
    $('.fi-wrap-load').addClass('loading');
  }

  render(){
    return (
      <div>
          <section className="fi-medium-wrap">
              <h2 className="fi-headline">Vídeo em destaque</h2>
              <VideoDetail video={this.state.selectedVideo} apikey={ApiKey} />
          </section>
          <section className="fi-small-wrap">
              <h2 className="fi-headline">+Vídeos</h2>
              <div className="fi-video-list">
                  <VideoList
                    handleVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                  />
                  <div className="fi-wrap-load">
                      <button className="fi-load-more" onClick={() => this.loadMore()}>carregar mais vídeos...</button>
                      <span className="icon-svg"><svg><use xlinkHref='#loader'/></svg></span>
                  </div>
              </div>
          </section>
      </div>
    )
  }
}

export default Home;
