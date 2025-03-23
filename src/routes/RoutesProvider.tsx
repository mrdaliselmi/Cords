import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';

const RoutesProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={
              route.public ? (
                <route.component />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesProvider; 