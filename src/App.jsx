import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet, NavLink, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Form from "./Components/Form";
import JokeApi from "./Components/JokeApi";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import ApiMeaning from "./Components/ApiMeaning";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  const ProtectedRoute = ({ path, element }) => {
    return isLoggedIn ? element : <Navigate to="/login" />;
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="form" className="navbar-link">
          Form
        </Link>
        <Link to="jokes-api" className="navbar-link">
          Jokes
        </Link>
        <Link to="register" className="navbar-link">
          Register
        </Link>
        <Link to="api-meaning" className="navbar-link">
          API Meaning
        </Link>
        <div className="navbar-right">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="navbar-link">
              Logout
            </button>
          ) : (
            <Link to="login" className="navbar-link">
              Login
            </Link>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="jokes-api" element={<JokeApi />} />
        <Route path="register" element={<Register />} />
        <Route
          path="login"
          element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="api-meaning"
          element={
            <ProtectedRoute
              path="api-meaning"
              element={<ApiMeaning />}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
