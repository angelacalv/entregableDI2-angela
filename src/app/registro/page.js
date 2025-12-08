"use client";

import FormularioRegistro from "../components/FormularioRegistro";
import { useRouter } from "next/navigation";

export default function Registro() {
  const router = useRouter();

  const handleRegister = ({ nombre, usuario, contacto, contrasena }) => {
    
    router.push("/explorer");
  };

  return (
    <main>
      <h1>Viajeros Aventureros</h1>
      <p>"Descubre el mundo con nosotros"</p>

      <p>INICIAR SESIÓN</p>
      <FormularioRegistro onRegistrar={handleRegister} />

      <p>EL MUNDO ES DEMASIADO GRANDE PARA QUEDARSE EN UN SOLO LUGAR</p>
    </main>
  );
}




