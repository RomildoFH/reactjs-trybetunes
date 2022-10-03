import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div data-testid="page-search">
        <input type="text" placeholder="Album or Artist Name" />
        <button type="button">Search</button>
      </div>

    );
  }
}

export default Search;
