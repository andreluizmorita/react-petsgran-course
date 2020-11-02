import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserStorage } from './context/UserContext';

import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Photo from './components/Photo/Photo';
import ProtectedRoute from './components/Helper/ProtectedRoutes';

import Home from './pages/Home';
import Login from './pages/Login/Login';
import User from './pages/User/User';
import UserProfile from './pages/User/UserProfile';

import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <UserStorage>
          <Header />
          
          <main className="app-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              
              <ProtectedRoute path="conta/*" element={<User />} />

              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />

              <Route path="*" element={<NotFound /> } />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
