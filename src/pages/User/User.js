import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from '../../components/NotFound';
import Feed from '../../components/Feed';
import { UserContext } from '../../context/UserContext';

import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const User = () => {
  const { data } = React.useContext(UserContext)

  return (
    <div className="container">
      <UserHeader />
      
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />

        <Route path="*" element={<NotFound /> } />
      </Routes> 
    </div>
  );
}
export default User;