import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LinksBar from '../components/LinksBar';
// import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      image: '',
      description: '',
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    const newObj = await getUser();
    this.setState({
      name: newObj.name,
      email: newObj.email,
      image: newObj.image,
      description: newObj.description,
      // loading: false,
    });
  };

  render() {
    const { name, email, image, description } = this.state;
    return (
      <div data-testid="page-profile">
        <LinksBar />
        <Header />
        <img src={ image } alt={ name } data-testid="profile-image" />
        <h3>{ name }</h3>
        <p>{ email }</p>
        <p>{ description }</p>
        <Link to="profile/edit">Editar perfil</Link>
      </div>

    );
  }
}

export default Profile;
