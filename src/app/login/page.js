"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FormularioLogin from "../components/FormularioLogin";
import Link from "next/link";

export default function LoginUnico() {
  const [error, setError] = useState("");
  const router = useRouter();

  const usuarios = [
    { email: "angela_calv@icloud.com", contrasena: "123456", rol: "usuario" },
    { email: "admin@gmail.com", contrasena: "123456", rol: "admin" },
  ];

  const handleLogin = ({ email, contrasena }) => {
    const encontrado = usuarios.find(
      (u) => u.email === email && u.contrasena === contrasena
    );

    if (!encontrado) {
      setError("Credenciales incorrectas");
      return;
    }

    setError("");

    if (encontrado.rol === "admin") {
      router.push("/admin");
    } else {
      router.push("/explorer");
    }
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
            INICIAR SESIÓN
          </p>

          {error && (
            <p className="mb-3 text-sm text-red-600 text-center">
              {error}
            </p>
          )}

          <FormularioLogin onLogin={handleLogin} />
        </div>

        <p className="mt-4 text-sm text-white drop-shadow">
          ¿No tienes cuenta?{" "}
          <Link
            href="/registro"
            className="underline font-semibold hover:text-white/90"
          >
            Regístrate aquí
          </Link>
        </p>

        <p className="mt-10 text-[10px] sm:text-xs tracking-widest text-white/90 drop-shadow">
          EL MUNDO ES DEMASIADO GRANDE PARA QUEDARSE EN UN SOLO LUGAR
        </p>
      </div>
    </main>


  );

}

