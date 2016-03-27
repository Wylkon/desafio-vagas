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

    this.init(this.props.params.term);
  }

  componentDidMount(){
    this.loader();
    this.init(this.props.params.term)
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
    YTSearch({key: ApiKey, term: term, channelId: 'UCqhnX4jA0A5paNd1v-zEysw', maxResults: 12}, videos => {
      this.setState({
        videos: videos.items,
        nextPageToken: videos.nextPageToken ? videos.nextPageToken : null,
      });
   });
  }

  render() {
    render: {
      return (
        <div className="fi-search">
          <h2 className="fi-headline">Todos os vídeos do Canal</h2>
          <Results term={""} videos={this.state.videos} />
          <div className="fi-loader">
            <span className="icon-svg"><svg><use xlinkHref='#loader'/></svg></span>
          </div>
        </div>
      )
    }
  }
}

export default Videos;
