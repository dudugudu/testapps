import React from "react";

interface LogsProps {
  logs: string[];
}

const Logs: React.FC<LogsProps> = ({ logs }) => {
  return (
    <div>
      <h2>Logs</h2>
      <div id="log-output">
        {logs.map((log, index) => (
          <div key={index}>{log}</div>
        ))}
      </div>
    </div>
  );
};

export default Logs;
