import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar/navbar';
import RoutesConfig from './routes';  // Import RoutesConfig
import GoogleMapComponent from './pages/googleMaps';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/googlemaps" element={<GoogleMapComponent />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

// ./pages/navbar/navbar