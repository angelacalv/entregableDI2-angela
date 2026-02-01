"use client";

import { useState } from "react";

export default function FormularioLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !contrasena.trim()) return;

    onLogin({ email, contrasena });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        className="mt-2 w-full rounded-md border border-gray-300 bg-white py-2 text-sm text-gray-700 hover:bg-gray-50"
      >
        Entrar
      </button>
    </form>
  );
}
