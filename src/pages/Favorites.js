import React from 'react';
import Header from '../components/Header';
import LinksBar from '../components/LinksBar';

class Favorites extends React.Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <LinksBar />
        <Header />
        <h3>Favority Musics</h3>
        <ul>
          <li>Music 1</li>
          <li>Music 2</li>
          <li>Music 3</li>
        </ul>
      </div>

    );
  }
}

export default Favorites;
