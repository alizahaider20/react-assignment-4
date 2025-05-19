import React, { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import { fetchUsers } from './services/api';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  };

  const buttonStyle = {
    margin: '10px',
    padding: '8px 16px',
    backgroundColor: '#4caf50',
    border: 'none',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const userListStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <h1>User List</h1>
      <button
        onClick={loadData}
        style={buttonStyle}
      >
        Refresh
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && <p>Total users: {users.length}</p>}
      <div style={userListStyle}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
