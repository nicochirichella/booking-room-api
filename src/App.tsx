import React from 'react';
import { Home } from './components/pages/Home';
import { SearchPage } from './components/pages/SearchPage';
import { HotelPage } from './components/pages/HotelPage';
import { RoomPage } from './components/pages/RoomPage';
import { BookingGrid } from './components/BookingGrid';

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
          <Route path="/hotel/:hotelId/search" element={<SearchPage />} />
          <Route path="/hotel/:hotelId/room/:roomId" element={<RoomPage />} />
          <Route path="/booking/hotel/:hotelId" element={<BookingGrid />} />
          <Route path="/booking/hotel/:hotelId/room/:roomId" element={<BookingGrid />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
