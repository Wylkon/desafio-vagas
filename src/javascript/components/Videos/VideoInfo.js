import React from 'react';
import Marked from 'marked';
import getYoutubeInfo from '../../utils/helpers';

class VideoInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      publishedAt: '',
      views: ''
    };
  }

  componentDidMount(){
    this.init(this.props.selectedVideo.id.videoId);
  }

  componentWillReceiveProps(nextProps){
    this.init(nextProps.selectedVideo.id.videoId);
    $("html, body").animate({ scrollTop: "0px" });
  }

  init(id){
    getYoutubeInfo(id, this.props.apikey)
      .then(function(data){
        this.setState({
          description: data.info.description,
          publishedAt: data.info.publishedAt,
          views: data.views
        })
      }.bind(this))
  }

  rawMarkup() {
    var rawMarkup = Marked(this.state.description.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }

  dateFormat() {
    const monthNames = [
      "Janeiro", "Fevereiro", "Março",
      "Abril", "Maio", "Junho", "Julho",
      "Agosto", "Setembro", "Outubro",
      "Novembro", "Dezembro"
    ];

    const date = new Date(this.state.publishedAt);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + ' de ' + monthNames[monthIndex] + ' de ' + year;
  }

  abbrNum(number, decPlaces) {
    decPlaces = Math.pow(10,decPlaces);
    var abbrev = [ "k", "m", "b", "t" ];
    for (var i=abbrev.length-1; i>=0; i--) {
      var size = Math.pow(10,(i+1)*3);
      if(size <= number) {
        number = Math.round(number*decPlaces/size)/decPlaces;

        if((number == 1000) && (i < abbrev.length - 1)) {
          number = 1;
          i++;
        }

        number += abbrev[i];
        break;
      }
    }

    return number;
  }

  render() {
    return (
      <div className="fi-video-detail">
        <div className="fi-responsive-16by9">
          <iframe className="embed-responsive-item" src={this.props.videoUrl} />
        </div>
        <div className="fi-video-details">
          <div className="fi-modal-info">
            <span className="icon-svg"><svg><use xlinkHref='#icon-times'/></svg></span>
            <div className="fi-modal-content"><p>{this.dateFormat()}</p></div>
          </div>
          <div className="fi-modal-info">
            <span className="icon-svg"><svg><use xlinkHref='#icon-views'/></svg></span>
            <div className="fi-modal-content"><p>{this.abbrNum(this.state.views, 0)} views</p></div>
          </div>
          <div className="fi-description-wrap">
            <h2>{this.props.selectedVideo.snippet.title}</h2>
            <div dangerouslySetInnerHTML={this.rawMarkup()} />
          </div>
        </div>
      </div>
    )
  }
}

export default VideoInfo;
