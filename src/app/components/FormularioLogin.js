"use client";
import { useState } from "react";

export default function FormularioLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!email.trim() || !contrasena.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    setError("");
    onLogin({ email: email.trim(), contrasena: contrasena.trim() });
  };

  return (
    <form onSubmit={manejarEnvio} className="form-login">
      {error && <p style={{ color: "red" }}>{error}</p>}

      <label>
        Correo:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ejemplo@mail.com"
        />
      </label>

      <label>
        Contraseña:
        <input
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          placeholder="********"
        />
      </label>

      <button type="submit">Entrar</button>
    </form>
  );
}
