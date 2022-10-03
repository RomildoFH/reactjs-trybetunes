import React from 'react';
import Header from '../components/Header';
import LinksBar from '../components/LinksBar';

class Search extends React.Component {
  render() {
    return (
      <div data-testid="page-search">
        <LinksBar />
        <Header />
        <input type="text" placeholder="Album or Artist Name" />
        <button type="button">Search</button>
      </div>

    );
  }
}

export default Search;
