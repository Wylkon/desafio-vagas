var React  = require( 'react');
var Header = require('./Header');
require('../../sass/styles.scss');

var Main = React.createClass({
  render: function() {
    return (
      <div className="fi-main">
        <Header />
        <div className="fi-container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
