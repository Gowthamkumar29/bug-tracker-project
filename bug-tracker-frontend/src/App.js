// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import BugForm from './pages/BugForm';
import BugList from './pages/BugList';
import Dashboard from './pages/Dashboard';

function App() {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? '/dashboard' : '/login'} replace />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/submit-bug" element={<BugForm />} />
        <Route path="/bugs" element={<BugList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* 🛑 Fallback route for undefined paths */}
        <Route path="*" element={
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <h2>404 - Page Not Found</h2>
            <p>Looks like you took a wrong turn 😅</p>
            <a href="/" style={{ color: 'blue' }}>Go back to Home</a>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
