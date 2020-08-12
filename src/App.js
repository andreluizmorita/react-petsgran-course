import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserStorage } from './context/UserContext';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>

          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
