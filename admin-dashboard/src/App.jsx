// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AdminLayout from './Components/AdminLayout';
import Dashboard from './Components/Dashboard';
import Products from './Components/Products';

const App = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const isAdmin = user?.role === 'admin';

  return (
    <Router>
      <Routes>
        <Route path="/loginadmin" element={<Login />} />

        {isAdmin ? (
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
