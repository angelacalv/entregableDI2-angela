"use client";

import { useState } from "react";
import { destinos as destinosIniciales } from "../mock/data";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AdminPage() {
  const [destinos, setDestinos] = useState(destinosIniciales);

  const eliminarDestino = (id) => {
    const nuevos = destinos.filter((d) => d.id !== id);
    setDestinos(nuevos);
  };

  return (
    <main>
      <Header/>
      <section>
        <Link href="/admin/create">
          <button>Crear</button>
        </Link>
        <Link href="/admin/edit/1">
          <button>Modificar</button>
        </Link>
      </section>

      <section>
        {destinos.map((destino) => (
          <article key={destino.id}>

            <h2>{destino.nombre}</h2>

            <p>{destino.descripcion}</p>
            <section>
              <img src={destino.imagen} alt={destino.nombre}/>
              <img src={destino.mapa} alt="Mapa"/>
            </section>

            <section>
              <h3>¿Qué visitar?</h3>

              <ul>
                {destino.visitar.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {destino.visitarFotos.map((foto, i) => (
                <img key={i} src={foto} alt="Visitar"/>
              ))}
            </section>

            <section>
              <h3>¿Dónde alojarse?</h3>

              <ul>
                {destino.alojarse.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {destino.alojarseFotos.map((foto, i) => (
                <img key={i} src={foto} alt="Alojamiento"/>
              ))}
            </section>

            <section>
              <h3>¿Dónde comer?</h3>

              <ul>
                {destino.comer.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {destino.comerFotos.map((foto, i) => (
                <img key={i} src={foto} alt="Comida" width={300} />
              ))}
            </section>

            <div>
              <button onClick={() => eliminarDestino(destino.id)}>
                Eliminar
              </button>
            </div>
          </article>
        ))}
      </section>
      <Footer/>
    </main>
  );
}
