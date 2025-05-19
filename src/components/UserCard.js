import React from 'react';

const UserCard = ({ user }) => (
  <div
    style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      margin: '20px',
      padding: '20px',
      width: '300px',
      textAlign: 'left',
      backgroundColor: '#fff',
    }}
  >
    <h3>{user.name}</h3>
    <p>Email: {user.email}</p>
    <p>Company: {user.company?.name}</p>
    <p>Website: {user.website}</p>
    <p>Phone: {user.phone}</p>
  </div>
);

export default UserCard;
