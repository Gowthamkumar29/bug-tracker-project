// src/pages/Dashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [bugs, setBugs] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    axios
      .get('http://localhost:5000/api/bugs', {
        headers: { Authorization: token },
      })
      .then((res) => setBugs(res.data))
      .catch((err) => console.error(err));
  }, [navigate, token]);

  const total = bugs.length;
  const open = bugs.filter((bug) => bug.status === 'open').length;
  const closed = bugs.filter((bug) => bug.status === 'closed').length;

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>📊 Bug Tracker Dashboard</h2>
        <p>Welcome! Here's a quick overview:</p>
        <ul style={styles.list}>
          <li>Total bugs: {total}</li>
          <li>Open: {open}</li>
          <li>Closed: {closed}</li>
        </ul>

        <div style={styles.actions}>
          <button style={styles.button} onClick={() => navigate('/submit-bug')}>🐞 Report Bug</button>
          <button style={styles.button} onClick={() => navigate('/bugs')}>📋 View Bugs</button>
          <button style={{ ...styles.button, backgroundColor: '#dc3545' }} onClick={handleLogout}>🚪 Logout</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
  },
  card: {
    background: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '400px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
  },
  list: {
    textAlign: 'left',
    paddingLeft: '0',
    listStyle: 'none',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  button: {
    padding: '10px 14px',
    fontSize: '15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default Dashboard;
