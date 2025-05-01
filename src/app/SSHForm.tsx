import React, { useState } from "react";

interface SSHFormProps {
  addLog: (message: string) => void;
}

const SSHForm: React.FC<SSHFormProps> = ({ addLog }) => {
  const [host, setHost] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleConnect = () => {
    // Lógica para conectar via SSH (a ser implementada)
    console.log(`Conectando a ${host} com usuário ${user}`);
    addLog(`Tentando conectar a ${host} como ${user}`);
  };

  return (
    <div>
      <h2>SSH</h2>
      <label htmlFor="ssh-host">Host:</label>
      <input
        type="text"
        id="ssh-host"
        value={host}
        onChange={(e) => setHost(e.target.value)}
      />
      <label htmlFor="ssh-user">Usuário:</label>
      <input
        type="text"
        id="ssh-user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <label htmlFor="ssh-password">Senha:</label>
      <input
        type="password"
        id="ssh-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleConnect}>
        Conectar
      </button>
    </div>
  );
};

export default SSHForm;
