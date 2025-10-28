import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

export default function Register(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", { name, email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🪐 Create Account</h1>
        <p className="muted">Join FocusFlow</p>
        <form onSubmit={submit}>
          <input name="name" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} required />
          <input name="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input type="password" name="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <button type="submit">Register</button>
        </form>
        <p className="muted">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}
