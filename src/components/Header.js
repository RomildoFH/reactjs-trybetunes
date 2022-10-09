import React from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      user: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.loadingHeader();
  }

  loadingHeader = async () => {
    const newObj = await getUser();
    this.setState({
      user: newObj.name,
      loading: false,
    });
    return newObj;
  };

  render() {
    const { loading, user } = this.state;
    if (loading) return <Loading />;
    return (
      <header data-testid="header-component">
        <p>
          Olá,
          <span
            data-testid="header-user-name"
          >
            {' '}
            {user}
          </span>
        </p>
      </header>
    );
  }
}

export default Header;
