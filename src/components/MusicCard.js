import React from 'react';
import PropTypes from 'prop-types';
// import Loading from '../components/Loading';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      // artistName: '',
      // albumName: '',
      // tracks: [],
      // loading: true,
    };
  }

  createCart = () => {
    const { trackId, trackName, previewUrl } = this.props;
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
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            id={ trackId }
          />
        </label>
      </div>
    );
    return result;
  };

  render() {
    return (
      <div className="music-card">
        {/* {
          loading && <Loading />
        } */}
        {
          this.createCart()
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
