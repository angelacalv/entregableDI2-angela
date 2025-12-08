"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FormularioLogin from "../components/FormularioLogin";

export default function LoginAdmin() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = ({ email, contrasena }) => {
    if (email === "admin@gmail.com" && contrasena === "123456") {
      router.push("/admin"); 
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <main>
      <h1>Viajeros Aventureros</h1>
      <p>"Descubre el mundo con nosotros"</p>

      <p>PERFIL ADMINISTRADOR</p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <FormularioLogin onLogin={handleLogin} />

      <p>EL MUNDO ES DEMASIADO GRANDE PARA QUEDARSE EN UN SOLO LUGAR</p>
    </main>
  );
}
