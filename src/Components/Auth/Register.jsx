import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find((user) => user.username === username);
    if (user) {
      setError("User already exists");
      return;
    }

    const newUser = {
      username,
      password,
    };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    navigate("/login");
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom, #FF416C, #FF4B2B)',
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

  const errorStyle = {
    color: 'red',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const buttonStyle = {
    background: 'linear-gradient(to right, #00B4DB, #0083B0)',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        {error && <p style={errorStyle}>{error}</p>}
        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>
    </div>
  );
}