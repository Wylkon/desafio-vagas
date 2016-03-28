import React from 'react';
import Results from './Search/Results';
import YTSearch from 'youtube-search-channel';
const ApiKey = 'AIzaSyBMVaFEeyzGrPhY-sjmJZprqZrJj2qbeQU';

class Search extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      videos: [],
      term: this.props.params.term,
      nextPageToken: null
    }
  }

  componentDidMount(){
    this.loader();
    this.init(this.props.params.term)
  }


  componentWillReceiveProps(nextProps){
    this.loader();
    this.init(nextProps.params.term);
  }

  loader(){
    $('body').addClass('is-loading');
    $('.fi-loader').removeClass('disabled');
  }

  loadMore(){
    this.init(this.props.params.term);
    $('.fi-wrap-load').addClass('loading');
  }

  init(term){
    if(this.state.term === term) {
      YTSearch({key: ApiKey, term: term, channelId: 'UCqhnX4jA0A5paNd1v-zEysw', maxResults: 12, nextPageToken: this.state.nextPageToken}, videos => {
        this.setState({
          videos: this.state.videos.concat(videos.items),
          nextPageToken: videos.nextPageToken ? videos.nextPageToken : null,
          term: term
        });
      });
    } else {
      YTSearch({key: ApiKey, term: term, channelId: 'UCqhnX4jA0A5paNd1v-zEysw', maxResults: 12}, videos => {
        this.setState({
          videos: videos.items,
          nextPageToken: videos.nextPageToken ? videos.nextPageToken : null,
          term: term
        });
      });
    }

    setTimeout(function () {
      $('body').removeClass('is-loading');
      $('.fi-loader').addClass('disabled');
      $('.fi-wrap-load').removeClass('loading');

      if(this.state.nextPageToken === null) {
        $('.fi-wrap-load').addClass('hidden');
      } else {
        $('.fi-wrap-load').removeClass('hidden');
      }
    }.bind(this), 600);

  }

  render() {
    render: {
      return (
        <div className="fi-search">
          <Results term={this.props.params.term} videos={this.state.videos} />
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

export default Search;
