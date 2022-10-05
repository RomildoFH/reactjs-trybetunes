import React from 'react';
import FavoriteMusicCard from '../components/FavoriteMusicCard';
import Header from '../components/Header';
import LinksBar from '../components/LinksBar';
import Loading from '../components/Loading';
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

  // componentDidUpdate() {
  //   this.getFavorites();
  // }

  getFavorites = async () => {
    const newArray = await getFavoriteSongs();
    // console.log(newArray);
    this.setState({
      tracks: newArray,
      loading: false,
    });
    return newArray;
  };

  removeTrack = (track) => {
    console.log(track);
    const { tracks } = this.state;
    const newArray = tracks.filter((music) => (
      music !== track
    ));
    // console.log(newArray);
    this.setState({
      tracks: newArray,
    });
  };

  createList = () => {
    const { tracks } = this.state;
    const result = (
      <div className="album-container" data-testid="page-favorites">
        {
          tracks.map((track) => (
            <FavoriteMusicCard
              key={ track.trackId }
              trackId={ track.trackId }
              previewUrl={ track.previewUrl }
              trackName={ track.trackName }
              track={ track }
              removeTrack={ this.removeTrack }
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
