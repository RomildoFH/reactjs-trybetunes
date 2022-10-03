import React from 'react';
import { Link } from 'react-router-dom';

class LinksBar extends React.Component {
  render() {
    return (
      <div id="links-container">
        <Link to="/search" data-testid="link-to-search">Procurar</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Músicas favoritas</Link>
        <Link to="/profile" data-testid="link-to-profile">Meu Perfil</Link>
      </div>

    );
  }
}

export default LinksBar;
