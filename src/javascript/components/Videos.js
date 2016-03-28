import React from 'react';
import Results from './Videos/Results';
import YTSearch from 'youtube-search-channel';
const ApiKey = 'AIzaSyBMVaFEeyzGrPhY-sjmJZprqZrJj2qbeQU';

class Videos extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      videos: [],
      term: '',
      nextPageToken: ''
    }

    this.loader();
    this.init(this.props.params.term);
  }

  loader(){
    $('body').addClass('is-loading');
    $('.fi-loader').removeClass('disabled');
    setTimeout(function () {
      $('body').removeClass('is-loading');
      $('.fi-loader').addClass('disabled');
    }, 300);
  }

  init(term){
    YTSearch({key: ApiKey, term: term, channelId: 'UCqhnX4jA0A5paNd1v-zEysw', maxResults: 12, nextPageToken: this.state.nextPageToken}, videos => {
      this.setState({
        videos: this.state.videos.concat(videos.items),
        nextPageToken: videos.nextPageToken ? videos.nextPageToken : null,
      });

      setTimeout(function () {
        $('.fi-wrap-load').removeClass('loading');
      }, 600);
   });
  }

  loadMore(){
    this.init(this.props.params.term);
    $('.fi-wrap-load').addClass('loading');
  }

  render() {
    render: {
      return (
        <div className="fi-search">
          <h2 className="fi-headline">Todos os vídeos do Canal</h2>
          <Results term={""} videos={this.state.videos} />
          <div className="fi-wrap-load">
              <button className="fi-load-more" onClick={() => this.loadMore()}>carregar mais vídeos...</button>
              <span className="icon-svg"><svg><use xlinkHref='#loader'/></svg></span>
          </div>
          <div className="fi-loader">
            <span className="icon-svg"><svg><use xlinkHref='#loader'/></svg></span>
          </div>
        </div>
      )
    }
  }
}

export default Videos;
