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

    if (
      !nombre.trim() ||
      !usuario.trim() ||
      !contacto.trim() ||
      !contrasena.trim()
    ) {
      setError("Rellena todos los campos.");
      return;
    }

    setError("");
    onRegistrar({ nombre, usuario, contacto, contrasena });
  };

  return (
    <form onSubmit={manejarEnvio} className="w-full flex flex-col gap-3">
      {error && (
        <p className="text-sm text-red-600 text-center">{error}</p>
      )}

      <input
        type="text"
        placeholder="Nombre completo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
      />

      <input
        type="text"
        placeholder="Nombre de usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
      />

      <input
        type="text"
        placeholder="Teléfono o correo electrónico"
        value={contacto}
        onChange={(e) => setContacto(e.target.value)}
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
      />

      <button
        type="submit"
        className="mt-3 mx-auto rounded-md border border-gray-300 bg-white px-6 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
      >
        Registrarse
      </button>
    </form>
  );
}

