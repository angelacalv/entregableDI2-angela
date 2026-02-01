"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ExplorarCiudad from "../../components/ExplorarCiudad";
import { destinos } from "../guardados";

export default function DetalleContenido() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = Number(params.id);
  const from = searchParams.get("from"); 

  const [guardado, setGuardado] = useState(false);

  const destino = destinos.find((d) => d.id === id);

  if (!destino) {
    return (
      <>
        <Header />
        <main className="mx-auto w-full max-w-5xl px-4 py-10">
          <h1 className="text-2xl font-semibold text-gray-800">
            Destino no encontrado
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            No existe un destino con ese identificador.
          </p>

          <button
            onClick={() => router.push("/")}
            className="mt-6 w-full max-w-md rounded-md border border-emerald-300 bg-white px-6 py-2 text-sm text-emerald-700 hover:bg-emerald-50"
          >
            Volver al inicio
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const ciudad = {
    nombre: destino.nombre,
    descripcion: destino.descripcion,
    imagenPrincipal: destino.imagen,
    imagenMapa: "/mapa.png",

    visitar: [
      "Paseo en barco por los canales – La mejor forma de ver la ciudad desde el agua.",
      "Barrio de los Canales (Grachtengordel) – Zona Patrimonio de la Humanidad.",
      "Vondelpark – El parque más famoso, perfecto para pasear o hacer picnic.",
      "Jordaan – Barrio con calles estrechas, tiendas artesanales y cafés acogedores.",
    ],
    imagenVisitar: "/canal1.png",

    alojarse: ["Jordaan", "De Pijp", "Oud-Zuid"],
    imagenAlojamiento: "/hotel1.png",

    comer: ["Rob Wigboldus Vishandel", "Moeders", "Van Kerkwijk"],
    imagenComer: "/comida1.png",
  };

  const handleEliminar = () => {
    alert("Viaje eliminado (simulado).");
    router.push("/guardados");
  };

  const handleDescargar = () => {
    alert("Descarga simulada (sin backend).");
  };

  return (
    <>
      <Header />

      {from !== "guardados" && (
        <div className="mx-auto w-full max-w-5xl px-4 pt-4">
          <button
            onClick={() => setGuardado(!guardado)}
            className="rounded-md border border-emerald-300 bg-white px-4 py-1.5 text-sm text-emerald-700 hover:bg-emerald-50"
          >
            {guardado ? "Quitar de guardados" : "Guardar"}
          </button>

          {guardado && (
            <p className="mt-2 text-sm text-gray-700">Guardado en tu lista.</p>
          )}
        </div>
      )}

      <ExplorarCiudad ciudad={ciudad} mostrarBoton={false} />

      <div className="mx-auto w-full max-w-5xl px-4 pb-10">
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <button
            onClick={handleDescargar}
            className="w-full sm:w-48 rounded-md border border-emerald-300 bg-white px-6 py-2 text-sm text-emerald-700 hover:bg-emerald-50"
          >
            Descargar
          </button>

          <button
            onClick={() => router.back()}
            className="w-full sm:w-32 rounded-md border border-emerald-300 bg-white px-6 py-2 text-sm text-emerald-700 hover:bg-emerald-50"
          >
            Volver
          </button>

          <button
            onClick={handleEliminar}
            className="w-full sm:w-64 rounded-md border border-emerald-300 bg-white px-6 py-2 text-sm text-emerald-700 hover:bg-emerald-50"
          >
            Eliminar viaje guardado
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
