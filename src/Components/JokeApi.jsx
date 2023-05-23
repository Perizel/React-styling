import React, { useState, useEffect } from "react";
import axios from "axios";

export default function JokeApi() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
      setJoke(response.data);
    };
    fetchJoke();
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom, #B24592, #F15F79)',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const jokeContainerStyle = {
    padding: '40px',
    borderRadius: '10px',
    background: 'transparent',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  };

  const jokeStyle = {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const jokeSetupStyle = {
    marginBottom: '10px',
    fontSize: '18px',
  };

  const jokePunchlineStyle = {
    fontSize: '18px',
  };

  return (
    <div style={containerStyle}>
      <div style={jokeContainerStyle}>
        <h1 style={jokeStyle}>Our Recent Joke</h1>
        <h2>Joke Type: {joke.type}</h2>
        <h3>Joke ID: {joke.id}</h3>
        <p style={jokeSetupStyle}>Joke Setup: {joke.setup}</p>
        <p style={jokePunchlineStyle}>Joke Punchline: {joke.punchline}</p>
      </div>
    </div>
  );
}
