"use client";

import { useRouter } from "next/navigation";
import Grid from "./components/Grid";

export default function LandingPage() {
  const router = useRouter();

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

  const handleMostrarMas = () => {
    router.push("/home");
  };

  return (
    <main>
      <h1>Viajeros Aventureros</h1>
      <p>"Descubre el mundo con nosotros"</p>

      <section>
        <video src="/amsterdam.mp4" controls />
      </section>

      <p>EL MUNDO ES DEMASIADO GRANDE PARA QUEDARSE EN UN SOLO LUGAR</p>

      <Grid data={destinos} />

      <button onClick={handleMostrarMas}>Mostrar más</button>

      {/* Bloque inferior fijo (como en Figma) */}
      <section>
        <img src="/mas.png" alt="Amsterdam" />
        <h3>Amsterdam</h3>
        <p>
          Es la capital de los Países Bajos, conocida por sus canales pintorescos,
          casas con fachadas estrechas, y su ambiente abierto y multicultural.
          Es famosa por su arquitectura histórica, museos como el Rijksmuseum y el de Van Gogh,
          y su cultura del uso de la bicicleta. Además, combina el encanto de una ciudad antigua
          con una vida moderna, artística y vibrante.
        </p>
      </section>
    </main>
  );
}

