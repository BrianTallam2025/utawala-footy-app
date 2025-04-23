import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Players from './pages/players';
import Register from './pages/register';
import PlayerProfile from './components/playerprofile';

function Approutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/players/" element={<Players />} />
      <Route path="/players/:id" element={<PlayerProfile />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Approutes;