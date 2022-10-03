import React from 'react';

class ProfileEdit extends React.Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <h2>Edit Profile</h2>
        <form>
          <label htmlFor="change-name">
            User Name
            <input type="text" id="change-name" className="form-input" value="" />
          </label>
        </form>
      </div>
    );
  }
}

export default ProfileEdit;
