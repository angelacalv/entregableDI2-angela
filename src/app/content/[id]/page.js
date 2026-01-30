"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { destinos } from "../guardados";
import ExplorarCiudad from "../../components/ExplorarCiudad";

export default function DetalleContenido() {
  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);

  // Estado simple para demostrar useState (guardar/quitar)
  const [guardado, setGuardado] = useState(false);

  const destino = destinos.find((d) => d.id === id);

  if (!destino) {
    return (
      <>
        <Header />
        <main style={{ padding: 16 }}>
          <h1>Destino no encontrado</h1>
          <p>No existe un destino con ese identificador.</p>
          <button onClick={() => router.push("/")}>Volver al inicio</button>
        </main>
        <Footer />
      </>
    );
  }

  // Adaptamos a la forma que espera ExplorarCiudad (nombre/descripcion/imagenes/listas)
  const ciudad = {
    nombre: destino.nombre,
    descripcion: destino.descripcion,
    imagenPrincipal: destino.imagen,
    imagenMapa: "/mapa.png",

    // Listas mock (mínimas) para que el componente sea reutilizable y dinámico
    visitar: ["Punto de interés 1", "Punto de interés 2", "Punto de interés 3"],
    imagenVisitar: "/canal1.png",

    alojarse: ["Zona recomendada 1", "Zona recomendada 2"],
    imagenAlojamiento: "/hotel1.png",

    comer: ["Restaurante recomendado 1", "Restaurante recomendado 2"],
    imagenComer: "/comida1.png",
  };

  return (
    <>
      <Header />

      <div style={{ padding: 16 }}>
        <button onClick={() => router.back()}>Volver</button>

        <button onClick={() => setGuardado(!guardado)} style={{ marginLeft: 8 }}>
          {guardado ? "Quitar de guardados" : "Guardar"}
        </button>

        {/* Renderizado condicional sencillo */}
        {guardado && <p style={{ marginTop: 8 }}>Guardado en tu lista.</p>}
      </div>

      <ExplorarCiudad ciudad={ciudad} />

      <Footer />
    </>
  );
}
