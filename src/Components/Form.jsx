import React, { useState } from 'react';

export default function Form() {
  const [userName, setUsername] = useState('');
  const [userDetails, setUserDetails] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleUserDetailsChange = (e) => {
    setUserDetails(e.target.value);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom, #FF512F, #DD2476)',
  };

  const formStyle = {
    background: '#fff',
    padding: '40px',
    borderRadius: '50%',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  };

  const inputStyle = {
    marginBottom: '20px',
    padding: '8px',
    width: '100%',
    borderRadius: '4px',
    border: 'none',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const textareaStyle = {
    marginBottom: '20px',
    padding: '8px',
    width: '100%',
    borderRadius: '4px',
    border: 'none',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <label htmlFor="username" style={labelStyle}>
          Username
        </label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          value={userName}
          onChange={handleChange}
          style={inputStyle}
        />
        <p>Username is: {userName}</p>

        <label htmlFor="user-details" style={labelStyle}>
          User Details
        </label>
        <br />
        <textarea
          id="user-details"
          name="user-details"
          cols="30"
          rows="10"
          value={userDetails}
          onChange={handleUserDetailsChange}
          style={textareaStyle}
        ></textarea>
        <p>User details are: {userDetails}</p>
      </form>
    </div>
  );
}