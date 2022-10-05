import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import LinksBar from '../components/LinksBar';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';

class ProfileEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      image: '',
      description: '',
      loading: false,
      disable: true,
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.inputValidation());
  }

  fetchUser = async () => {
    const newObj = await getUser();
    this.setState({
      name: newObj.name,
      email: newObj.email,
      image: newObj.image,
      description: newObj.description,
      loading: false,
    });
  };

  inputValidation = () => {
    const { name, email, image, description } = this.state;
    const testeName = name.length > 0;
    const testeEmail = email.length > 0;
    const testeEmail2 = email.includes('@');
    const testeImage = image.length > 0;
    const testeDescription = description.length > 0;
    const validation = (
      testeName && testeEmail && testeEmail2 && testeImage && testeDescription
    );
    if (validation) {
      this.setState({
        disable: false,
      });
    } else {
      this.setState({
        disable: true,
      });
    }
  };

  redirect = () => {
    const { history } = this.props;
    history.push('/profile');
  };

  updateProfile = async () => {
    const { name, email, image, description } = this.state;
    const newObj = {
      name,
      email,
      image,
      description,
    };
    // console.log(newObj);
    await updateUser(newObj);
    this.redirect();
  };

  render() {
    const { name, email, image, description, loading, disable } = this.state;
    if (loading) return <Loading />;
    return (
      <div data-testid="page-profile-edit">
        <LinksBar />
        <Header />
        <h2>Edit Profile</h2>
        <form>
          <label htmlFor="change-name">
            User Name
            <input
              name="name"
              type="text"
              id="change-name"
              className="form-input"
              value={ name }
              data-testid="edit-input-name"
              onChange={ (event) => this.handleChange(event) }
            />
          </label>
          <label htmlFor="change-email">
            E-mail
            <input
              name="email"
              type="email"
              id="change-email"
              className="form-input"
              value={ email }
              data-testid="edit-input-email"
              onChange={ (event) => this.handleChange(event) }
            />
          </label>
          <label htmlFor="change-image">
            Imagem
            <input
              name="image"
              type="text"
              id="change-image"
              className="form-input"
              value={ image }
              data-testid="edit-input-image"
              onChange={ (event) => this.handleChange(event) }
            />
          </label>
          <label htmlFor="change-description">
            Descrição
            <input
              name="description"
              type="text"
              id="change-description"
              className="form-input"
              value={ description }
              data-testid="edit-input-description"
              onChange={ (event) => this.handleChange(event) }
            />
          </label>
          <button
            type="button"
            data-testid="edit-button-save"
            disabled={ disable }
            onClick={ this.updateProfile }
          >
            Editar perfil
          </button>
        </form>
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default ProfileEdit;
