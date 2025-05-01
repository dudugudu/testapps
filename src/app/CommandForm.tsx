import React, { useState } from "react";
const { ipcRenderer } = window.require("electron");

const CommandForm: React.FC<any> = () => {
  const [command, setCommand] = useState("");

  const handleExecute = () => {
    ipcRenderer.once("ping-response", (event: any, response: string) => {
      console.log(response);
    });

    ipcRenderer.send("execute-ping", command);
  };

  return (
    <div>
      <h2>Ping</h2>
      <label htmlFor="command">Endereço:</label>
      <input
        type="text"
        id="command"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
      />
      <button type="button" onClick={handleExecute}>
        Executar
      </button>
    </div>
  );
};

export default CommandForm;
