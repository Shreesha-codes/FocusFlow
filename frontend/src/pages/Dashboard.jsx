import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

export default function Dashboard(){
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(()=> {
    const token = localStorage.getItem("token");
    if (!token) { navigate("/login"); return; }

    const fetch = async () => {
      try {
        const res = await api.get("/auth/me", { headers: { Authorization: `Bearer ${token}` }});
        setUser(res.data.user);
      } catch {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };
    fetch();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <div className="card">
        <h1>🌟 Welcome, {user?.name || "Explorer"}!</h1>
        <p className="muted">Your FocusFlow Control Center</p>
        <div style={{display:"flex",gap:12,justifyContent:"center",marginTop:16}}>
          <Link to="/tasks" className="btn">Tasks</Link>
          <button className="btn logout" onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
