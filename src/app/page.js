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

  return (
    <main
      className="min-h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/mapa-fondo.png')" }}
    >
      <h1 className="mt-10 text-3xl sm:text-4xl font-serif text-gray-700 text-center">
        Viajeros Aventureros
      </h1>
      <p className="mt-1 text-gray-500 italic text-sm sm:text-base text-center">
        "Descubre el mundo con nosotros"
      </p>

      <section className="mt-8 w-full max-w-[560px] px-4">
        <video
          src="/amsterdam.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-xl shadow-lg"
        />
      </section>

      <p className="mt-4 text-xs tracking-widest text-gray-600 text-center px-4">
        EL MUNDO ES DEMASIADO GRANDE PARA QUEDARSE EN UN SOLO LUGAR
      </p>

      <Grid data={destinos} />

      <button
        onClick={() => router.push("/home")}
        className="mt-7 rounded-md border border-gray-300 bg-white/80 px-6 py-2 text-sm text-gray-700 hover:bg-white"
      >
        Mostrar más
      </button>

      <section className="mt-8 mb-12 w-full max-w-[900px] px-4">
        <div className="rounded-xl bg-white/90 shadow-md border border-black/5 p-4 sm:p-5 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 items-center">
          <img
            src="/mas.png"
            alt="Amsterdam"
            className="w-full h-40 md:h-32 rounded-lg object-cover"
          />

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800">Amsterdam</h3>
            <p className="mt-2 text-sm text-gray-600 leading-snug">
              Es la capital de los Países Bajos, conocida por sus canales pintorescos,
              casas con fachadas estrechas y su ambiente abierto y multicultural. Es famosa
              por su arquitectura histórica, museos como el Rijksmuseum y el de Van Gogh,
              y su cultura del uso de la bicicleta.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
