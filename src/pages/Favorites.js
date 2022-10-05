import React from 'react';
import Header from '../components/Header';
import LinksBar from '../components/LinksBar';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getFavorites();
  }

  componentDidUpdate() {
    this.getFavorites();
  }

  getFavorites = async () => {
    const newArray = await getFavoriteSongs();
    // console.log(newArray);
    this.setState({
      tracks: newArray,
      loading: false,
    });
    return newArray;
  };

  createList = () => {
    const { tracks } = this.state;
    const result = (
      <div className="album-container">
        {
          tracks.map((track) => (
            <MusicCard
              key={ track.trackId }
              trackId={ track.trackId }
              previewUrl={ track.previewUrl }
              trackName={ track.trackName }
              track={ track }
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

export default Favorites;
