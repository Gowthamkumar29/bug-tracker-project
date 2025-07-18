import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/auth');
  };

  return (
    <nav style={{ padding: '10px', textAlign: 'center', background: '#f0f0f0' }}>
      <Link to="/auth" style={{ marginRight: '10px' }}>Register</Link>
      <Link to="/auth" style={{ marginRight: '10px' }}>Login</Link>
      <Link to="/submit-bug" style={{ marginRight: '10px' }}>Report Bug</Link>
      <Link to="/bugs">View Bugs</Link>

      {isLoggedIn && (
        <>
          <span style={{ margin: '0 10px', fontWeight: 'bold' }}>
            👋 {username}
          </span>
          <button onClick={handleLogout} style={{ padding: '5px 10px' }}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
