import React from 'react';
import { Link, Route,Routes } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">gildongHong</Link>
        </li>
        <li>
          <Link to="/profiles/Harper">harper</Link>
        </li>
      </ul>
      
      <Routes>
        <Route path='/' element='유저를 선택해주세요' />
        <Route path=':username' element={<Profile/>} />
      </Routes> 
      
    </div>
  );
};

export default Profiles;