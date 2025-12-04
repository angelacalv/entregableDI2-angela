"use client";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function FormularioDestino({ datosIniciales = {}, alGuardar }) {
  const [datos, setDatos] = useState({
    nombre: datosIniciales.nombre || "",
    descripcion: datosIniciales.descripcion || "",
    fotos: datosIniciales.fotos || [],
    mapa: datosIniciales.mapa || "",
    visitar: datosIniciales.visitar || [],
    visitarFotos: datosIniciales.visitarFotos || [],
    alojarse: datosIniciales.alojarse || [],
    alojarseFotos: datosIniciales.alojarseFotos || [],
    comer: datosIniciales.comer || [],
    comerFotos: datosIniciales.comerFotos || []
  });

  const actualizarCampo = (campo, valor) => setDatos(prev => ({ ...prev, [campo]: valor }));
  const agregarALista = (campo) => setDatos(prev => ({ ...prev, [campo]: [...prev[campo], ""] }));
  const actualizarLista = (campo, indice, valor) => {
    const copia = [...datos[campo]];
    copia[indice] = valor;
    setDatos(prev => ({ ...prev, [campo]: copia }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!datos.nombre.trim()) {
      alert("Introduce el nombre del destino.");
      return;
    }
    alGuardar(datos);
  };

  return (
    <>
      <Header />
      <main>
        <form onSubmit={manejarEnvio}>
          <label>Nombre del destino:</label>
          <input
            value={datos.nombre}
            onChange={(e) => actualizarCampo("nombre", e.target.value)}
          />

          <label>Descripción:</label>
          <textarea
            value={datos.descripcion}
            onChange={(e) => actualizarCampo("descripcion", e.target.value)}
          />

          <h4>Fotos del destino</h4>
          <button type="button" onClick={() => agregarALista("fotos")}>Agregar foto</button>
          {datos.fotos.map((f, i) => (
            <input
              key={i}
              value={f}
              onChange={(e) => actualizarLista("fotos", i, e.target.value)}
            />
          ))}

          <label>Mapa (URL):</label>
          <input
            value={datos.mapa}
            onChange={(e) => actualizarCampo("mapa", e.target.value)}
          />

          <hr />

          <h4>¿Qué visitar?</h4>
          <button type="button" onClick={() => agregarALista("visitar")}>Agregar lugar</button>
          {datos.visitar.map((v, i) => (
            <input
              key={i}
              value={v}
              onChange={(e) => actualizarLista("visitar", i, e.target.value)}
            />
          ))}

          <h5>Fotos sección "Qué visitar"</h5>
          <button type="button" onClick={() => agregarALista("visitarFotos")}>Agregar foto</button>
          {datos.visitarFotos.map((f, i) => (
            <input
              key={i}
              value={f}
              onChange={(e) => actualizarLista("visitarFotos", i, e.target.value)}
            />
          ))}

          <hr />

          <h4>¿Dónde alojarse?</h4>
          <button type="button" onClick={() => agregarALista("alojarse")}>Agregar opción</button>
          {datos.alojarse.map((a, i) => (
            <input
              key={i}
              value={a}
              onChange={(e) => actualizarLista("alojarse", i, e.target.value)}
            />
          ))}

          <h5>Fotos sección "Alojarse"</h5>
          <button type="button" onClick={() => agregarALista("alojarseFotos")}>Agregar foto</button>
          {datos.alojarseFotos.map((f, i) => (
            <input
              key={i}
              value={f}
              onChange={(e) => actualizarLista("alojarseFotos", i, e.target.value)}
            />
          ))}

          <hr />

          <h4>¿Dónde comer?</h4>
          <button type="button" onClick={() => agregarALista("comer")}>Agregar opción</button>
          {datos.comer.map((c, i) => (
            <input
              key={i}
              value={c}
              onChange={(e) => actualizarLista("comer", i, e.target.value)}
            />
          ))}

          <h5>Fotos sección "Comer"</h5>
          <button type="button" onClick={() => agregarALista("comerFotos")}>Agregar foto</button>
          {datos.comerFotos.map((f, i) => (
            <input
              key={i}
              value={f}
              onChange={(e) => actualizarLista("comerFotos", i, e.target.value)}
            />
          ))}

          <button type="submit">Guardar destino</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
