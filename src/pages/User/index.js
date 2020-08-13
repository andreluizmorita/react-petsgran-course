import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Feed from '../../components/Feed';

import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';



const User = () =>{
  return (
    <div className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes> 
    </div>
  );
}
export default User;