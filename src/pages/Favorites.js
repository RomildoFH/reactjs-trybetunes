import React from 'react';

class Favorites extends React.Component {
  render() {
    return (
      <div data-testid="page-favorites">
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
