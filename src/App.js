import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserStorage } from './context/UserContext';

import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/Helper/ProtectedRoutes';

import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
          </Routes>

          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
