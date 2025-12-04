"use client";

import { useState } from "react";
import FormularioRegistro from "../components/FormularioRegistro";

export default function Registro() {
  const [creado, setCreado] = useState(null);

  const handleRegister = ({ nombre, email }) => {
    setCreado({ nombre, email });
  };

  return (
    <main>
      <h1>Registro</h1>
      <p>"Descubre el mundo con nosotros"</p>

      {!creado ? (
        <FormularioRegistro onRegister={handleRegister} />
      ) : (
        <div>
          <p>Usuario creado con éxito:</p>
          <p>{creado.nombre} – {creado.email}</p>

          <a href="/loginUsuario">Iniciar sesión</a>
        </div>
      )}

      <p>EL MUNDO ES DEMASIADO GRANDE PARA QUEDARSE EN UN SOLO LUGAR</p>
    </main>
  );
}


