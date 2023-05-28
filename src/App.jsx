import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Form from "./Components/Form";
import JokesApi from "./Components/JokeApi";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import ApiMeaning from "./Components/ApiMeaning";
import UserList from "./Components/Auth/UserList";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const ProtectedRoute = ({ path, element }) => {
    return isLoggedIn ? element : <Navigate to="/login" />;
  };

  return (
    <div>
      <nav>
        <div className="left-links">
          <Link to="/">Home</Link>
          <div className="dropdown">
            <button onClick={toggleDropdown} className="dropbtn">
              Menu
            </button>
            {showDropdown && (
              <div className="dropdown-content">
                <Link to="form">Form</Link>
                <Link to="jokes-api">Jokes</Link>
                <Link to="api-meaning">API Meaning</Link>
                <Link to="user-list">User List</Link>
              </div>
            )}
          </div>
        </div>
        <div className="right-links">
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link to="register">Register</Link>
              <Link to="login">Login</Link>
            </>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="jokes-api" element={<JokesApi />} />
        <Route path="register" element={<Register />} />
        <Route
          path="login"
          element={
            isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="api-meaning"
          element={
            <ProtectedRoute path="api-meaning" element={<ApiMeaning />} />
          }
        />
        <Route
          path="user-list"
          element={<ProtectedRoute path="user-list" element={<UserList />} />}
        />
        <Route
          path="*"
          element={
            <h1>
              Not Found, go back home <Link to="/">Home</Link>
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
