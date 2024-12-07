// src/routes.js
import React from 'react';
import { Route } from 'react-router-dom';

import GoogleMapComponent from './pages/googleMaps';

const RoutesConfig = () => (
  <>
    <Route path="/googlemaps" element={<GoogleMapComponent />} />
  </>
);

export default RoutesConfig;
