import { useEffect } from 'react';
import { Home } from './components/pages/Home';
import { SearchPage } from './components/pages/SearchPage';
import { HotelPage } from './components/pages/HotelPage';
import { RoomPage } from './components/pages/RoomPage';
import { BookingGrid } from './components/BookingGrid';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/pages/LoginPage';
import PrivateRoute from './helper/privateRoute';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
// setDbValues on booking redux store from first render from firebase getting all bookings
import { setDbValues } from './features/booking/bookingSlice';
import { useAppDispatch } from './app/hooks';
import { getBookings } from './db/bookingRepository';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    getBookings().then((bookings) => {
      if (bookings) {
        console.log('dispatching ', bookings);
        dispatch(setDbValues(bookings));
      }
    });
  }, []);

  return (
    <div >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" 
            element={<PrivateRoute>
                      <SearchPage />
                    </PrivateRoute>} 
          />
          <Route path="/hotel/:hotelId" 
            element={<PrivateRoute>
                      <HotelPage />
                    </PrivateRoute>}  />
          <Route path="/hotel/:hotelId/search" 
            element={<PrivateRoute>
                      <SearchPage />
                    </PrivateRoute>}  />
          <Route path="/hotel/:hotelId/room/:roomId" 
            element={<PrivateRoute>
                      <RoomPage />
                    </PrivateRoute>}  />
          <Route path="/booking/hotel/:hotelId" 
            element={<PrivateRoute>
                      <BookingGrid />
                    </PrivateRoute>}  />
          <Route path="/booking/hotel/:hotelId/room/:roomId" 
            element={<PrivateRoute>
                      <BookingGrid />
                    </PrivateRoute>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
