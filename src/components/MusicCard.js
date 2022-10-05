import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      favorite: false,
      FavoritesIds: [],
    };
  }

  componentDidMount() {
    this.getFavorites();
    this.getFavoritesIds();
  }

  // componentDidUpdate() {
  //   this.getFavorites();
  //   this.getFavoritesIds();
  // }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
      loading: true,
    }, () => this.fetchFavorites());
  }

  fetchFavorites = async () => {
    const { track } = this.props;
    const { FavoritesIds } = this.state;
    if (FavoritesIds.includes(track.trackId) === false) {
      await addSong(track);
    }
    if (FavoritesIds.includes(track.trackId) === true) {
      await removeSong(track);
    }
    this.setState({
      loading: false,
    });
  };

  validateFavoriteState = async () => {
    const { track } = this.props;
    const { FavoritesIds } = this.state;
    if (FavoritesIds.includes(track.trackId)) {
      this.setState({
        favorite: true,
        // loading: false,
      });
    }
    this.setState({
      loading: false,
    });
  };

  getFavoritesIds = async () => {
    const newArray = await getFavoriteSongs();
    const arrayIds = newArray.map((objeto) => (
      objeto.trackId
    ));
    this.setState({
      FavoritesIds: arrayIds,
      loading: true,
    }, () => this.validateFavoriteState());
  };

  getFavorites = async () => {
    const newArray = await getFavoriteSongs();
    // console.log(newArray);
    this.setState({
      // loading: false,
    });
    return newArray;
  };

  createCart = () => {
    const { trackId, trackName, previewUrl } = this.props;
    const { favorite } = this.state;
    const result = (
      <div key={ trackId }>
        <p className="track-name">{trackName}</p>
        <audio
          data-testid="audio-component"
          src={ previewUrl }
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ trackId }>
          Favorita
          <input
            name="favorite"
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            id={ trackId }
            checked={ favorite }
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
      </div>
    );
    return result;
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="music-card">
        {
          loading && <Loading />
        }
        {
          !loading && this.createCart()
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackId: PropTypes.string,
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
}.isRequired;

export default MusicCard;
