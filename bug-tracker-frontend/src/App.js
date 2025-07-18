// src/App.js

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import BugForm from './pages/BugForm';
import BugList from './pages/BugList';
import Dashboard from './pages/Dashboard';

function App() {
  const token = localStorage.getItem('token');
  const isLoggedIn = token && token !== 'undefined' && token !== 'null';

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={isLoggedIn ? '/dashboard' : '/auth'} replace />}
      />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/submit-bug" element={<BugForm />} />
      <Route path="/bugs" element={<BugList />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
