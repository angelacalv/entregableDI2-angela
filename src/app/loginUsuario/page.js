"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FormularioLogin from "../components/FormularioLogin";
import Link from "next/link";

export default function LoginUsuario() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = ({ email, contrasena }) => {
    if (email === "angela_calv@icloud.com" && contrasena === "123456") {
      router.push("/explorer");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <main>
      <h1>Viajeros Aventureros</h1>
      <p>"Descubre el mundo con nosotros"</p>

      <p>INICIAR SESIÓN</p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <FormularioLogin onLogin={handleLogin} />

      <p>
        ¿No tienes cuenta? <Link href="/registro">Regístrate aquí</Link>
      </p>

      <p>EL MUNDO ES DEMASIADO GRANDE PARA QUEDARSE EN UN SOLO LUGAR</p>
    </main>
  );
}
