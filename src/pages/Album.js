import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import LinksBar from '../components/LinksBar';
import Loading from '../components/Loading';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      albumName: '',
      tracks: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getAlbumMusics();
  }

  getAlbumMusics = async () => {
    const { match: { params: { id } } } = this.props;
    const newArray = await getMusics(id);
    const collection = newArray[0];
    const tracks = newArray.filter((element, index) => (
      index > 0 ? element : null
    ));
    this.setState({
      artistName: collection.artistName,
      albumName: collection.collectionName,
      tracks,
      loading: false,
    });
  };

  createList = () => {
    const { tracks, albumName, artistName } = this.state;
    const result = (
      <div className="album-container">
        {
          (tracks.length > 0) && (
            <div className="album-data">
              <h3 data-testid="artist-name" className="artist-title">{artistName}</h3>
              <h4 data-testid="album-name" className="collection-title">{albumName}</h4>
            </div>
          )
        }
        {
          tracks.map((track) => (
            <MusicCard
              key={ track.trackId }
              trackId={ track.trackId }
              previewUrl={ track.previewUrl }
              trackName={ track.trackName }
            />
          ))
        }
      </div>
    );
    return result;
  };

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="page-album">
        <LinksBar />
        <Header />
        {
          loading && <Loading />
        }
        {
          this.createList()
        }
      </div>

    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default Album;
