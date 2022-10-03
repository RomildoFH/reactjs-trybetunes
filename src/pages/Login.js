import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      disabled: true,
      loading: false,
      // email: '',
      // image: '',
      // description: '',
    };
  }

  handleButton = async () => {
    const { createUser, history } = this.props;
    const { name } = this.state;
    this.setState({
      loading: true,
    });
    const newObj = { name }; // Shorthand property using a property called name and a value name;
    await createUser(newObj);
    this.setState({
      loading: false,
    });
    history.push('/search');
  };

  inputValidation = (value, reference) => {
    if (value.length >= reference) {
      this.setState({
        disabled: false,
      });
    }
    if (value.length < reference) {
      this.setState({
        disabled: true,
      });
    }
  };

  handleChange = ({ target }) => {
    const { value } = target;
    const minLength = 3;
    this.setState({
      name: value,
      // disabled: false,
      // loading: false,
    }, () => this.inputValidation(value, minLength));
  };

  render() {
    const { name, disabled, loading } = this.state;
    if (loading) return (<p>Carregando...</p>);
    return (
      <div data-testid="page-login">
        <input
          type="text"
          value={ name }
          name="name"
          placeholder="User Name"
          data-testid="login-name-input"
          onChange={ (event) => this.handleChange(event) }
        />
        <button
          type="button"
          data-testid="login-submit-button"
          onClick={ this.handleButton }
          disabled={ disabled }
        >
          Entrar
        </button>
      </div>

    );
  }
}

Login.propTypes = {
  createUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
