import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';
import { createUser } from './services/userAPI';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => <Login { ...props } createUser={ createUser } /> }
          />
          <Route path="/search" render={ () => <Search /> } />
          <Route path="/album/:id" render={ (props) => <Album { ...props } /> } />
          <Route path="/favorites" render={ () => <Favorites /> } />
          <Route exact path="/profile" render={ () => <Profile /> } />
          <Route
            path="/profile/edit"
            render={ (props) => <ProfileEdit { ...props } /> }
          />
          <Route path="*" render={ () => <NotFound /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
