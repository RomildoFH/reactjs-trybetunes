import React from 'react';

class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
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
