import React, { useState } from 'react';
import './Form1.css';

function Form() {
  const [userName, setUsername] = useState("");
  const [userDetails, setUserDetails] = useState("");
  const [submittedUsername, setSubmittedUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleUserDetailsChange = (e) => {
    setUserDetails(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUsername(userName);
    setUsername("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={userName}
          onChange={handleChange}
        />
        <button type="submit">Submit Username</button>
      </form>
      <br />
      {submittedUsername && <p>Username is: {submittedUsername}</p>}
      <textarea
        name="user-details"
        cols="30"
        rows="10"
        value={userDetails}
        onChange={handleUserDetailsChange}
      ></textarea>
      <b>
        <p>User details are: {userDetails}</p>
      </b>
    </div>
  );
}

export default Form;