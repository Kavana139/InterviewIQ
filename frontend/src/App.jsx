import { useState } from "react";

function App() {
  const [role, setRole] = useState("Backend");
  const [difficulty, setDifficulty] = useState("Easy");

  function handleStart() {
    alert(`Starting a ${difficulty} ${role} interview`);
  }

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>InterviewIQ</h1>
      <p>Set up your mock interview</p>

      <div style={{ marginBottom: 16 }}>
        <label>Role</label>
        <br />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option>Backend</option>
          <option>Frontend</option>
          <option>Full-stack</option>
        </select>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label>Difficulty</label>
        <br />
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      <button onClick={handleStart}>Start interview</button>
    </div>
  );
}

export default App;