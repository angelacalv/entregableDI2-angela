"use client";

import { useState } from "react";
import LoginForm from "../components/FormularioLogin";

export default function LoginPage() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  const handleLogin = ({ email }) => {
    setUser({ email });
    setMessage(`Usuario ${email} autenticado (mock).`);
  };

  return (
    <>
      <main>
        {!user ? (
          <>
            <h1>Viajeros Aventureros</h1>
            <p>"Descubre el mundo con nosotros"</p>

            <h2>PERFIL ADMINISTRADOR</h2>
            <LoginForm onLogin={handleLogin} />

            <p>EL MUNDO ES DEMASIADO GRANDE PARA QUEDARSE EN UN SOLO LUGAR</p>
          </>
        ) : (
          <div>
            <p>{message}</p>
            <a href="/">Volver al inicio</a>
          </div>
        )}
      </main>
    </>
  );
}

