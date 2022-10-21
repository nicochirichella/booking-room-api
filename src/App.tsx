import React from 'react';
import { Home } from './components/Home';
import { SearchPage } from './components/SearchPage';
import { HotelPage } from './components/HotelPage';
import { RoomPage } from './components/RoomPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/hotel/:hotelId" element={<HotelPage />} />
          <Route path="/hotel/:hotelId/room/:roomId" element={<RoomPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
