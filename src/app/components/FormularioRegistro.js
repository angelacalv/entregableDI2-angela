"use client";
import { useState } from "react";

export default function FormularioRegistro({ onRegistrar }) {
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contacto, setContacto] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !usuario.trim() || !contacto.trim() || !contrasena.trim()) {
      setError("Rellena todos los campos.");
      return;
    }
    setError("");
    onRegistrar({ nombre, usuario, contacto, contrasena });
  };

  return (
    <form onSubmit={manejarEnvio} className="form-registro">
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="Nombre completo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="text"
        placeholder="Nombre de usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <input
        type="text"
        placeholder="Teléfono o correo electrónico"
        value={contacto}
        onChange={(e) => setContacto(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />

      <button type="submit">Registrarse</button>
    </form>
  );
}
