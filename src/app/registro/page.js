"use client";

import FormularioRegistro from "../components/FormularioRegistro";
import { useRouter } from "next/navigation";

export default function Registro() {
  const router = useRouter();

  const handleRegister = ({ nombre, usuario, contacto, contrasena }) => {
    router.push("/explorer");
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/mapa-fondo2.png')" }}
    >

      <div className="w-full max-w-4xl bg-gray-600/20 backdrop-blur-sm rounded-2xl px-6 py-10 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-5xl font-serif text-white drop-shadow">
          Viajeros Aventureros
        </h1>

        <p className="mt-2 text-white/90 italic text-sm sm:text-base drop-shadow">
          "Descubre el mundo con nosotros"
        </p>

        <div className="mt-8 w-full max-w-sm bg-white/90 rounded-xl px-6 py-6 shadow-md text-gray-700">
          <p className="mb-4 text-xs tracking-widest text-center text-gray-600">
            REGISTRO
          </p>

          <FormularioRegistro onRegistrar={handleRegister} />
        </div>

        <p className="mt-4 text-sm text-white drop-shadow">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="underline font-semibold hover:text-white/90">
            Inicia sesión
          </a>
        </p>

        <p className="mt-10 text-[10px] sm:text-xs tracking-widest text-white/90 drop-shadow">
          EL MUNDO ES DEMASIADO GRANDE PARA QUEDARSE EN UN SOLO LUGAR
        </p>
      </div>
    </main>
  );
}






