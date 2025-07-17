import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  const fetchBugs = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/bugs', {
        headers: { Authorization: token },
      });
      setBugs(res.data);
    } catch (err) {
      console.error(err);
      alert('❌ Failed to fetch bugs');
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:5000/api/bugs/${id}`,
        { status },
        { headers: { Authorization: token } }
      );
      fetchBugs(); // Refresh list
    } catch (err) {
      console.error(err);
      alert('❌ Failed to update status');
    }
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🐞 Reported Bugs</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Reported By</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bugs.map((bug) => (
            <tr key={bug._id}>
              <td style={styles.td}>{bug.title}</td>
              <td style={styles.td}>{bug.description}</td>
              <td style={styles.td}>{bug.status}</td>
              <td style={styles.td}>{bug.reportedBy?.username || 'Unknown'}</td>
              <td style={styles.td}>
                {['open', 'in progress', 'closed'].map((s) => (
                  <button
                    key={s}
                    onClick={() => handleStatusChange(bug._id, s)}
                    style={{
                      ...styles.statusBtn,
                      backgroundColor:
                        s === 'open' ? '#ffc107' : s === 'in progress' ? '#17a2b8' : '#28a745',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f5f7fa',
    minHeight: '100vh',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  th: {
    padding: '15px',
    backgroundColor: '#343a40',
    color: 'white',
    textAlign: 'left',
  },
  td: {
    padding: '15px',
    borderBottom: '1px solid #dee2e6',
    verticalAlign: 'top',
  },
  statusBtn: {
    marginRight: '5px',
    border: 'none',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '12px',
  },
};

export default BugList;
