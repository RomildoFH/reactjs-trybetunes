import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-login">
        <input type="text" value="" placeholder="User Name" />
        <button type="button">Login</button>
      </div>

    );
  }
}

export default Login;
