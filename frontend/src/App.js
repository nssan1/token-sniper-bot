import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

function App() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    socket.on('log', msg => {
      setLogs(prev => [...prev, msg]);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Token Sniper Dashboard</h1>
      <div className="bg-gray-100 p-2 rounded shadow">
        {logs.map((log, idx) => (
          <div key={idx} className="text-sm text-gray-800">{log}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
