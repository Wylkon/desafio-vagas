var React = require('react');

var ResultsList = React.createClass({
  render: function() {
    var results = this.props.results.map(function(result, index){
      return <li className="fi-results-item">Item</li>
    })
    return (
      <ul className="fi-results-list">
        {results}
      </ul>
    )
  }
});

module.exports = ResultsList;
