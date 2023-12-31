import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LinksBar from '../components/LinksBar';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import './Search.css';
import logo from '../images/logo.png';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchFor: '',
      disabled: true,
      albuns: [],
      artist: '',
      loading: false,
      searching: false,
    };
  }

  fetchArtist = async () => {
    const { searchFor } = this.state;
    const newArray = await searchAlbumsAPI(searchFor);
    this.setState({
      loading: false,
      albuns: newArray,
      searchFor: '',
    });
  };

  handleClick = async () => {
    const { searchFor } = this.state;
    this.setState({
      loading: true,
      searching: true,
      artist: searchFor,
    });
    await this.fetchArtist();
  };

  inputValidation = (value) => {
    if (value.length > 1) {
      this.setState({
        disabled: false,
        searching: false,
      });
    }
    if (value.length < 2) {
      this.setState({
        disabled: true,
        searching: false,
      });
    }
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      searchFor: value,
    });
    this.inputValidation(value);
  };

  creatList = () => {
    const { albuns, artist } = this.state;
    const lenghtCheck = albuns.length > 0;
    const result = (
      <div className="lista-container">
        {
          lenghtCheck && (
            <h3>
              Resultado de álbuns de:
              {' '}
              {artist}
            </h3>
          )
        }
        {albuns.map((album) => (
          <div key={ album.collectionId } className="album-card">
            <img src={ album.artworkUrl100 } alt={ album.collectionName } />
            <div className="album-data">
              <h4>{album.collectionName}</h4>
              <p>{album.artistName}</p>
              <Link
                to={ `album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId}` }
              >
                Ver album
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
    if (albuns.length > 0) {
      return result;
    }
    return [];
  };

  render() {
    const { searchFor, disabled, loading, albuns, searching } = this.state;
    return (
      <div data-testid="page-search" className="page-search">
        <div className="left-side-container">
          <img src={ logo } alt="logo" className="logo-aside" />
          <Header />
          <aside className="side-menu">
            <LinksBar />
          </aside>
        </div>
        <div className="search-container">
          <div className="search-control-container">
            <input
              type="text"
              placeholder="Album or Artist Name"
              data-testid="search-artist-input"
              className="search-artist-input"
              value={ searchFor }
              onChange={ this.handleChange }
            />
            <button
              type="button"
              data-testid="search-artist-button"
              className="search-artist-button"
              disabled={ disabled }
              onClick={ this.handleClick }
            >
              Pesquisar
            </button>
          </div>
          <div className="album-container">
            {
              loading && (<Loading />)
            }
            {
              albuns.length > 0 && this.creatList()
            }
            {
              (searching === true && albuns.length === 0)
              && <p>Nenhum álbum foi encontrado</p>
            }
          </div>
        </div>
      </div>

    );
  }
}

export default Search;
