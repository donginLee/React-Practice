import React from 'react';
import './App.css';
import ProfileLoaderContainer from './containers/ProfileLoaderContainer';
import UserSearchContainer from './containers/UserSearch';
function App() {
  return (
    <>
      <UserSearchContainer></UserSearchContainer>
      <ProfileLoaderContainer></ProfileLoaderContainer>  
    </>
  );
}

export default App;
