import React from 'react';
import Header from '../components/Header';

class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <ul>
          <li>Album 1</li>
          <li>Album 2</li>
          <li>Album 3</li>
        </ul>
      </div>

    );
  }
}

export default Album;
