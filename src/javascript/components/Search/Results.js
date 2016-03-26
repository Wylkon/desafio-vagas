var React = require('react');

var Results = React.createClass({
  render: function() {
    return (
      <div>
        {console.log(this.props.videos)}
      </div>
    )
  }
});

module.exports = Results;
