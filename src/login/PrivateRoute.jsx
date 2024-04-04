// PrivateRoute.jsx

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated() ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
