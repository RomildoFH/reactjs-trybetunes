import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      favorite: false,
    };
  }

  componentDidMount() {
    // this.fetchFavorites();
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
      loading: true,
    });
    this.fetchFavorites();
  }

  fetchFavorites = async () => {
    const { track } = this.props;
    // this.setState({
    //   loading: true,
    // });
    await addSong(track);
    this.setState({
      loading: false,
    });
    // console.log('async realizado');
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
