"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="encabezado">
        <div className="marca">
          <img src="/logo.png" alt="Logo" />
          <h1>Viajeros Aventureros</h1>
        </div>

        <div className="busquedaAcciones">
          <input
            type="search"
            placeholder="Buscar destinos"
            aria-label="Buscar destinos"
          />
          <img src="/cargar.png" alt="Cargar" />
          <Link href="/explorer"><img src="/casa.png" alt="Inicio" /></Link>
          <Link href="/user"><img src="/muñeco.png" alt="Usuario" /></Link>
        </div>
      </div>

      <hr />

      <nav className="navegacion">
        <button type="button">¿Qué visitar?</button>
        <button type="button">¿Dónde alojarse?</button>
        <button type="button">¿Dónde comer?</button>
      </nav>

      <hr />
    </header>
  );
}

