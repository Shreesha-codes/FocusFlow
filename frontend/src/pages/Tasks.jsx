import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Tasks(){
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(()=> {
    if (!token) { navigate("/login"); return; }
    fetchTasks();
    // eslint-disable-next-line
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks", { headers: { Authorization: `Bearer ${token}` }});
      setTasks(res.data);
    } catch (err) {
      console.error(err);
      navigate("/login");
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await api.post("/tasks", { title }, { headers: { Authorization: `Bearer ${token}` }});
    setTitle("");
    fetchTasks();
  };

  const toggle = async (t) => {
    await api.put(`/tasks/${t._id}`, { isCompleted: !t.isCompleted }, { headers: { Authorization: `Bearer ${token}` }});
    fetchTasks();
  };

  const remove = async (id) => {
    await api.delete(`/tasks/${id}`, { headers: { Authorization: `Bearer ${token}` }});
    fetchTasks();
  };

  return (
    <div className="tasks-container">
      <div className="card">
        <h1>🪐 My Tasks</h1>
        <form onSubmit={addTask} style={{display:"flex",gap:8,marginTop:12}}>
          <input value={title} placeholder="New task..." onChange={e=>setTitle(e.target.value)} />
          <button type="submit">Add</button>
        </form>

        <ul style={{listStyle:"none",padding:0,marginTop:16}}>
          {tasks.length === 0 && <p className="muted">No tasks yet — add one!</p>}
          {tasks.map(t => (
            <li key={t._id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:10,marginBottom:8,background:"rgba(255,255,255,0.04)",borderRadius:8}}>
              <span style={{cursor:"pointer",textDecoration: t.isCompleted ? "line-through" : "none"}} onClick={()=>toggle(t)}>
                {t.title}
              </span>
              <div style={{display:"flex",gap:8}}>
                <button onClick={()=>toggle(t)} style={{padding:"6px 8px"}}>{t.isCompleted ? "Undo" : "Done"}</button>
                <button onClick={()=>remove(t._id)} style={{padding:"6px 8px"}}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
