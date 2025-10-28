import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🔭 FocusFlow</h1>
        <p className="muted">Login to continue</p>
        <form onSubmit={submit}>
          <input name="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input type="password" name="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <p className="muted">New here? <Link to="/register">Create account</Link></p>
      </div>
    </div>
  );
}
