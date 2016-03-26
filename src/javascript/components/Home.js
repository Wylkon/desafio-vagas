var React = require('react');
var VideoDetail = require('./VideoDetail');

var Home = React.createClass({
  render: function() {
    return (
      <div>
          <section className="fi-medium-wrap">
              <h2 className="fi-headline">Vídeo em destaque</h2>
              <VideoDetail />
              {/*<VideoDetail video={this.state.selectedVideo} />*/}
          </section>
          <section className="fi-small-wrap">
              <h2 className="fi-headline">+Vídeos</h2>
              <div className="fi-video-list">
                  {/*<VideoList
                    handleVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                  />
                  <div className="fi-wrap-load">
                      <button className="fi-load-more" onClick={() => this.loadMore(this.state.term, this.state.nextPageToken)}>carregar mais vídeos...</button>
                  </div>*/}
              </div>
          </section>
      </div>
    )
  }
});

module.exports = Home;
