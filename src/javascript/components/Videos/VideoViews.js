import React from 'react';
import getYoutubeInfo from '../../utils/helpers';
const apikey = 'AIzaSyBMVaFEeyzGrPhY-sjmJZprqZrJj2qbeQU';

class VideoViews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      views: ''
    }
  }

  componentDidMount(){
    this.init(this.props.videoId);
  }

  componentWillReceiveProps(nextProps){
    this.init(nextProps.videoId);
  }

  init(id){
    getYoutubeInfo(id, apikey)
      .then(function(data){
        this.setState({
          views: data.views
        })
      }.bind(this))
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
      <p>{this.abbrNum(this.state.views, 0)} views</p>
    )
  }
}

export default VideoViews;
