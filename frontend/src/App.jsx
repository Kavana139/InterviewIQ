import { useState, useEffect } from "react";

function App() {
  const [role, setRole] = useState("Backend");
  const [difficulty, setDifficulty] = useState("Easy");
  const [backendStatus, setBackendStatus] = useState("checking...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/health")
      .then((res) => res.json())
      .then((data) => setBackendStatus(data.status))
      .catch(() => setBackendStatus("not reachable"));
  }, []);

  function handleStart() {
    alert(`Starting a ${difficulty} ${role} interview`);
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-slate-900">InterviewIQ</h1>
        <p className="text-sm text-slate-500 mt-1">
          Backend status:{" "}
          <span className={backendStatus === "ok" ? "text-green-600" : "text-red-600"}>
            {backendStatus}
          </span>
        </p>

        <p className="mt-6 text-slate-700">Set up your mock interview</p>

        <div className="mt-4">
          <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
          <select
            className="w-full border border-slate-300 rounded-lg p-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Backend</option>
            <option>Frontend</option>
            <option>Full-stack</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-slate-700 mb-1">Difficulty</label>
          <select
            className="w-full border border-slate-300 rounded-lg p-2"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <button
          onClick={handleStart}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg"
        >
          Start interview
        </button>
      </div>
    </div>
  );
}

export default App;