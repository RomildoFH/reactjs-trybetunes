import React from 'react';
import { Link } from 'react-router-dom';
import lupa from '../images/lupa.png';
import profile from '../images/profile.png';
import star from '../images/star.png';

class LinksBar extends React.Component {
  render() {
    return (
      <div className="links-container">
        <div className="link-line">
          <img src={ lupa } alt="lupa" />
          <Link
            to="/search"
            data-testid="link-to-search"
            className="nav-link"
          >
            Procurar
          </Link>
        </div>
        <div className="link-line">
          <img src={ star } alt="star" />
          <Link
            to="/favorites"
            data-testid="link-to-favorites"
            className="nav-link"
          >
            Favoritos
          </Link>
        </div>
        <div className="link-line">
          <img src={ profile } alt="profile" />
          <Link
            to="/profile"
            data-testid="link-to-profile"
            className="nav-link"
          >
            Meu Perfil
          </Link>
        </div>
      </div>

    );
  }
}

export default LinksBar;
