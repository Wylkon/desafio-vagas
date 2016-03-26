import React from 'react';

class SearchBar extends React.Component {

  getRef(ref) {
    this.termRef = ref;
  }

  handleSubmit() {
    const term = this.termRef.value;
    this.termRef.value = '';
    this.context.router.push(`/search/${term}`);
  }

  activeInput(e) {
    $('.fi-search-bar').addClass('active');
  }

  disableInput(e) {
    $('.fi-search-bar').removeClass('active');
  }

  render() {
    return (
      <form onSubmit={() => this.handleSubmit()} className="fi-search-bar">
        <input type="text" placeholder="Busca" onFocus={() => this.activeInput()} onBlur={() => this.disableInput()} ref={(ref) => this.getRef(ref)} />
        <button>Enviar</button>
      </form>
    )
  }
}

SearchBar.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SearchBar;
