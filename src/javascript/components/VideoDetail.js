var React = require('react');

var VideoDetail = React.createClass({
  render: function() {
    return (
      <div className="fi-video-detail">
          <div className="fi-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/ImL7I3BX7Wo" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="fi-video-details">
              <div className="fi-modal-info">
                  <span className="icon-svg"><svg><use xlinkHref='#icon-times'/></svg></span>
                  <div className="fi-modal-content"><p>20 de agosto de 2015</p></div>
                  {/*<div className="fi-modal-content"><VideoPublished id={videoId} /></div>*/}
              </div>
              <div className="fi-modal-info">
                  <span className="icon-svg"><svg><use xlinkHref='#icon-views'/></svg></span>
                  <div className="fi-modal-content"><p>200k views</p></div>
                  {/*<div className="fi-modal-content"><VideoViews id={videoId} /></div>*/}
              </div>
              <h2>Título do vídeo</h2>
              <div className="fi-description-wrap">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
          </div>
      </div>
    )
  }
});

module.exports = VideoDetail;
