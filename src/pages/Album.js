import React from 'react';
import Header from '../components/Header';
import LinksBar from '../components/LinksBar';

class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
        <LinksBar />
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
