import React from 'react';
import Marked from 'marked';
import getYoutubeInfo from '../../utils/helpers';
const ApiKey = 'AIzaSyBMVaFEeyzGrPhY-sjmJZprqZrJj2qbeQU';

class VideoModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      publishedAt: '',
      views: '',
      id: this.props.video,
      title: ''
    };
  }

  componentWillReceiveProps(nextProps){

    if (nextProps.video === undefined || nextProps.video.length == 0) {
      return false;
    } else {
        this.loader();
        this.init(nextProps.video.id.videoId);
        this.setState({
          id: nextProps.video.id.videoId
        })

    }
  }

  loader(){
    $('body').addClass('is-loading');
    $('.fi-loader').removeClass('disabled');
  }

  init(id){
    getYoutubeInfo(id, ApiKey)
      .then(function(data){
        this.setState({
          description: data.info.description,
          publishedAt: data.info.publishedAt,
          views: data.views,
          title: data.info.title
        });
        setTimeout(function () {
          $('body').removeClass('is-loading');
          $('.fi-loader').addClass('disabled');
        }, 300);

        this.openModal();
      }.bind(this));
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

  openModal(){
    $('.fi-modal').removeClass('disabled');
    $('.fi-modal-overlay').removeClass('disabled');
    $('body').addClass('is-opened');
  }

  closeModal(){
    $('.fi-modal').addClass('disabled');
    $('.fi-modal-overlay').addClass('disabled');
    $('.embed-responsive-item').clone().appendTo('.fi-responsive-16by9');
    $('.embed-responsive-item')[1].remove();
    $('body').removeClass('is-opened');
  }

  render() {
    const url = `https://www.youtube.com/embed/${this.state.id}`;
    return (
      <div className="fi-modal disabled">
        <button className="fi-modal-button-x fi-modal-close" onClick={() => this.closeModal()}><svg id="icon-close" viewBox="0 0 18.3 18.3"><circle className="icon-close" cx="9.1" cy="9.1" r="7.6" /><path className="icon-close-x" d="M6.4 6.5l5.3 5.6M6.3 11.9l5.6-5.3"/></svg></button>
        <div className="fi-video-detail">
          <div className="fi-responsive-16by9">
            <iframe className="embed-responsive-item" src={url} />
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
              <h2>{this.state.title}</h2>
              <div dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoModal;
