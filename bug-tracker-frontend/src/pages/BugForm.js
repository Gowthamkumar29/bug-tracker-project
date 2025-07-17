// src/pages/BugForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const BugForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/bugs',
        { title, description },
        { headers: { Authorization: token } }
      );
      toast.success('🐞 Bug reported successfully!');
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error(err);
      toast.error('❌ Failed to report bug');
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Report a Bug</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Bug Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={styles.input}
        /><br />
        <textarea
          placeholder="Bug Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={styles.textarea}
        /><br />
        <button type="submit" style={styles.button}>Submit Bug</button>
      </form>
    </div>
  );
};

const styles = {
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    resize: 'vertical'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '6px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
  }
};

export default BugForm;
