"use client";

import { useState } from "react";
import Link from "next/link";

export default function CrearDestinoPage() {
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
    ubicacion: "",
  });

  const [mensaje, setMensaje] = useState("");

  const cambiar = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const enviar = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.descripcion || !form.imagen || !form.ubicacion) {
      setMensaje("Todos los campos son obligatorios.");
      return;
    }

    setMensaje(`Destino creado correctamente: ${form.nombre}`);
  };

  return (
    <main>
      <h1>Crear destino</h1>

      {mensaje && <p>{mensaje}</p>}

      <form onSubmit={enviar}>
        <label>Nombre:</label>
        <input name="nombre" value={form.nombre} onChange={cambiar} />

        <label>Descripción:</label>
        <textarea name="descripcion" value={form.descripcion} onChange={cambiar} />

        <label>Imagen (URL):</label>
        <input name="imagen" value={form.imagen} onChange={cambiar} />

        <label>Ubicación (texto):</label>
        <input name="ubicacion" value={form.ubicacion} onChange={cambiar} />

        <button type="submit">Crear destino</button>
      </form>

      <Link href="/admin">
        <button>Volver</button>
      </Link>
    </main>
  );
}

