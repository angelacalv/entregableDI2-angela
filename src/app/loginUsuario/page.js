"use client";

import FormularioLogin from "../components/FormularioLogin";
import { useState } from "react";
import Link from "next/link";

export default function LoginUsuario() {
  const [user, setUser] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const handleLogin = ({ email }) => {
    setUser({ email });
    setMensaje(`Inicio de sesión correcto: ${email}`);
  };

  return (
    <main>
      {!user ? (
        <>
          <h1>Iniciar Sesión</h1>
          <p>"Descubre el mundo con nosotros"</p>

          <FormularioLogin onLogin={handleLogin} />

          <p>
            ¿No tienes cuenta?  
            <Link href="/registro">Regístrate aquí</Link>
          </p>

          <p>EL MUNDO ES DEMASIADO GRANDE PARA QUEDARSE EN UN SOLO LUGAR</p>
        </>
      ) : (
        <div>
          <p>{mensaje}</p>
          <a href="/explorer">Entrar a la App</a>
        </div>
      )}
    </main>
  );
}
