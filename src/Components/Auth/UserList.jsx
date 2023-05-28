import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/users");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
            setError("Error fetching users.");
        }
    };

    return (
        <div className="user-list-container">
            <h1 className="user-list-title">User List</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="user-list">
                <div className="user-list-section">
                    <h2 className="section-title">Usernames</h2>
                    {users.map((user) => (
                        <div key={user.id} className="user-list-item">
                            <span className="username">{user.username}</span>
                        </div>
                    ))}
                </div>
                {/* <div className="user-list-section">
                    <h2 className="section-title">Passwords</h2>
                    {users.map((user) => (
                        <div key={user.id} className="user-list-item">
                            <span className="password">{user.password}</span>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
}
