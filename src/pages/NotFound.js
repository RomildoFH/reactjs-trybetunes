import React from 'react';
import Header from '../components/Header';
import LinksBar from '../components/LinksBar';

class NotFound extends React.Component {
  render() {
    return (
      <div data-testid="page-not-found">
        <LinksBar />
        <Header />
        <h3>404 - Not Found</h3>
        <p>Sorry, that was not possible found the url. Please verify the digited url.</p>
      </div>

    );
  }
}

export default NotFound;
