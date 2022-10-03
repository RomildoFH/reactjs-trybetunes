import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile">
        <h3>My Profile Name</h3>
        <img src="" alt="my-pic" />
        <p>My Description</p>
        <h4>What i like to hear</h4>
        <ul>
          <li>Stylle 1</li>
          <li>Stylle 2</li>
          <li>Stylle 3</li>
        </ul>
      </div>

    );
  }
}

export default Profile;
