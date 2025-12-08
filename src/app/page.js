"use client";

import { useState } from "react";
import Grid from "./components/Grid";

export default function LandingPage() {
  const destinos = [
    {
      id: 1,
      title: "Amsterdam",
      text: "Descubre la magia de sus canales que susurran historias y puentes que reflejan luz.",
      img: "/card1.png",
    },
    {
      id: 2,
      title: "Londres",
      text: "Donde la historia se une con la vanguardia y cada rincón inspira.",
      img: "/card2.png",
    },
    {
      id: 3,
      title: "Sevilla",
      text: "Corazón de Andalucía: sol, arte y tradición en cada calle.",
      img: "/card3.png",
    },
  ];

  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <main>
      <h1>Viajeros Aventureros</h1>
      <p>"Descubre el mundo con nosotros"</p>

      <section>
        <video src="/amsterdam.mp4"></video>
      </section>

      <p>EL MUNDO ES DEMASIADO GRANDE PARA QUEDARSE EN UN SOLO LUGAR</p>

      <Grid data={destinos} />

      <button onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? "Ocultar información" : "Mostrar más"}
      </button>

      {mostrarMas && (
        <section>
          <img src="/mas.png" alt="Amsterdam" />
          <h3>Amsterdam</h3>
          <p>
            Es la capital de los Países Bajos, famosa por sus canales, casas
            estrechas, museos como el Rijksmuseum y el de Van Gogh, y un ambiente
            vibrante y multicultural.
          </p>
        </section>
      )}

      <a href="/home">
        <button>Entrar</button>
      </a>
    </main>
  );
}

