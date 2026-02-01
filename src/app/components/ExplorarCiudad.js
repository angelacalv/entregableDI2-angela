"use client";

import { useState } from "react";

function Carrusel({ imagenes, altBase = "Imagen", className = "" }) {
  const [index, setIndex] = useState(0);

  const lista = Array.isArray(imagenes)
    ? imagenes
    : imagenes
    ? [imagenes]
    : [];

  if (lista.length === 0) return null;

  const total = lista.length;
  const anterior = () => setIndex((prev) => (prev - 1 + total) % total);
  const siguiente = () => setIndex((prev) => (prev + 1) % total);

  return (
    <div className={`relative overflow-hidden rounded-md border border-gray-200 ${className}`}>
      <img
        src={lista[index]}
        alt={`${altBase} ${index + 1}`}
        className="h-full w-full object-cover"
      />

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={anterior}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-2 py-1 text-sm text-gray-700 shadow hover:bg-white"
            aria-label="Anterior"
          >
            ◀
          </button>

          <button
            type="button"
            onClick={siguiente}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-2 py-1 text-sm text-gray-700 shadow hover:bg-white"
            aria-label="Siguiente"
          >
            ▶
          </button>

          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {lista.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-emerald-500" : "bg-white/80"
                }`}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}


export default function ExplorarCiudad({ ciudad, mostrarBoton = true }) {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-10">
      {/* Título y descripción */}
      <div className="pt-6">
        <h1 className="text-2xl font-semibold text-gray-800">{ciudad.nombre}</h1>
        <p className="mt-2 text-sm leading-relaxed text-gray-700">{ciudad.descripcion}</p>
      </div>

      {/* Carrusel principal + mapa */}
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Carrusel
          imagenes={ciudad.imagenesPrincipal || (ciudad.imagenPrincipal ? [ciudad.imagenPrincipal] : [])}
          altBase={`${ciudad.nombre} principal`}
          className="h-64 md:h-72"
        />

        <Carrusel
          imagenes={ciudad.imagenesMapa || (ciudad.imagenMapa ? [ciudad.imagenMapa] : [])}
          altBase={`Mapa de ${ciudad.nombre}`}
          className="h-64 md:h-72"
        />
      </div>

      <div className="my-6 h-[2px] w-full bg-slate-200" />

      {/* ¿Qué visitar? */}
      <div id="visitar" className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">¿Qué visitar?</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
            {ciudad.visitar.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <Carrusel
          imagenes={ciudad.imagenesVisitar || (ciudad.imagenVisitar ? [ciudad.imagenVisitar] : [])}
          altBase="Visitar"
          className="h-40 sm:h-44 md:h-48 md:w-[420px] justify-self-center md:justify-self-end"
        />
      </div>

      <div className="my-6 h-[2px] w-full bg-slate-200" />

      {/* Alojarse + Comer */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Alojarse */}
        <div id="alojarse" className="rounded-md border border-slate-200 p-4">
          <h2 className="text-base font-semibold text-gray-800">¿Dónde alojarse?</h2>

          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700">
            {ciudad.alojarse.map((item, i) => (
              <li key={i} className="ml-4 list-disc">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-3">
            <Carrusel
              imagenes={
                ciudad.imagenesAlojamiento ||
                (ciudad.imagenAlojamiento ? [ciudad.imagenAlojamiento] : [])
              }
              altBase="Alojamiento"
              className="h-32 sm:h-36"
            />
          </div>
        </div>

        {/* Comer */}
        <div id="comer" className="rounded-md border border-slate-200 p-4">
          <h2 className="text-base font-semibold text-gray-800">¿Dónde comer?</h2>

          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700">
            {ciudad.comer.map((item, i) => (
              <li key={i} className="ml-4 list-disc">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-3">
            <Carrusel
              imagenes={ciudad.imagenesComer || (ciudad.imagenComer ? [ciudad.imagenComer] : [])}
              altBase="Comida"
              className="h-32 sm:h-36"
            />
          </div>
        </div>
      </div>

      {mostrarBoton && (
        <div className="mt-8 flex justify-center">
          <button className="w-full max-w-md rounded-md border border-emerald-300 bg-white px-6 py-2 text-sm text-emerald-700 hover:bg-emerald-50">
            Descargar
          </button>
        </div>
      )}
    </section>
  );
}


