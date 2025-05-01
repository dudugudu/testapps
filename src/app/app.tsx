import React, { useState } from "react";
import CommandForm from "./CommandForm";
import Logs from "./Logs";

const App: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs((prevLogs) => [...prevLogs, message]);
  };

  return (
    <div className="container">
      <header>
        <h1>Ferramentas de TI</h1>
      </header>
      <section className="tool">
        <CommandForm />
      </section>
      <section className="tool">
        <Logs logs={logs} />
      </section>
    </div>
  );
};

export default App;
