var React = require('react');
var Router = require( 'react-router');

var SearchBar = React.createClass({
  mixins: [Router.History],

  getRef: function(ref) {
    this.termRef = ref;
  },
  handleSubmit: function() {
    var term = this.termRef.value;
    this.termRef.value = '';
    this.history.pushState(null, "search/" + term);
  },
  activeInput: function(e) {
    $('.fi-search-bar').addClass('active');
  },

  disableInput: function(e) {
    $('.fi-search-bar').removeClass('active');
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit} className="fi-search-bar">
        <input type="text" placeholder="Busca" onFocus={this.activeInput} onBlur={this.disableInput} ref={this.getRef} />
        <button>Enviar</button>
      </form>
    )
  }
});

module.exports = SearchBar;
