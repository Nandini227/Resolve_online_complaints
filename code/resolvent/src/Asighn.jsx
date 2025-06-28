import React, { useState, useEffect } from "react";
import "./App.css";

const Asighn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [complaints, setComplaints] = useState([]);

  const adminEmail = "resolvent321@gmail.com";
  const adminPassword = "Resolve_123";

  useEffect(() => {
    if (isLoggedIn) {
      fetch("http://localhost:5000/api/complaints/all")
        .then((res) => res.json())
        .then((data) => {
          const sorted = data.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          setComplaints(sorted);
        })
        .catch((err) => console.error("Error fetching complaints:", err));
    }
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      email.trim().toLowerCase() === adminEmail.toLowerCase() &&
      password.trim() === adminPassword
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Access Denied: Invalid Admin Credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  const updateComplaint = async (index, field, value) => {
    const updatedComplaint = { ...complaints[index], [field]: value };

    try {
      const res = await fetch(
        `http://localhost:5000/api/complaints/update/${updatedComplaint._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ [field]: value }),
        }
      );

      if (res.ok) {
        const updated = [...complaints];
        updated[index][field] = value;
        setComplaints(updated);
      } else {
        alert("Failed to update complaint");
      }
    } catch (err) {
      console.error("Error updating complaint:", err);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-card">
          <h2 className="admin-title">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="admin-button">
              Login as Admin
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h2>Admin Panel: Resolve Complaints</h2>
        <button onClick={handleLogout} className="admin-logout-button">
          Logout
        </button>
      </div>

      {complaints.length === 0 ? (
        <p className="no-complaints">No complaints submitted.</p>
      ) : (
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>User Email</th>
                <th>Title</th>
                <th>Category</th>
                <th>Date</th>
                <th>Status</th>
                <th>Admin Response</th>
                <th>Update Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((item, index) => (
                <tr key={index}>
                  <td>{item.userEmail}</td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.date}</td>
                  <td>{item.status}</td>
                  <td>
                    <textarea
                      rows="2"
                      value={item.answer || ""}
                      onChange={(e) =>
                        updateComplaint(index, "answer", e.target.value)
                      }
                      placeholder="Enter resolution..."
                      disabled={item.status === "Resolved"}
                    ></textarea>
                  </td>
                  <td>
                    <select
                      value={item.status}
                      onChange={(e) =>
                        updateComplaint(index, "status", e.target.value)
                      }
                    >
                      <option>Pending</option>
                      <option>In Progress</option>
                      <option>Resolved</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Asighn;
