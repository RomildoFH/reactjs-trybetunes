import React from 'react';
import Header from '../components/Header';
import LinksBar from '../components/LinksBar';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchFor: '',
      disabled: true,
    };
  }

  inputValidation = (value) => {
    const minLength = 2;
    if (value.length >= minLength) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      searchFor: value,
    }, this.inputValidation(value));
  };

  render() {
    const { searchFor, disabled } = this.state;
    return (
      <div data-testid="page-search">
        <LinksBar />
        <Header />
        <input
          type="text"
          placeholder="Album or Artist Name"
          data-testid="search-artist-input"
          value={ searchFor }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ disabled }
        >
          Pesquisar
        </button>
      </div>

    );
  }
}

export default Search;
