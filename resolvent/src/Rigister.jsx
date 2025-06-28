import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; 

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (trimmedPassword.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmedEmail,
          password: trimmedPassword,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registered successfully!");
        navigate("/usighn", { replace: true });
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Register to ResolveIt</h2>
        <form onSubmit={handleRegister}>
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
          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        <p className="register-text">
          Already have an account?{" "}
          <span
            className="register-link"
            onClick={() => navigate("/usighn")}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;

