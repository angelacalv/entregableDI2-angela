"use client";

import { useState } from "react";

export default function EditForm({ destino }) {
  const [formData, setFormData] = useState({
    nombre: destino.nombre,
    descripcion: destino.descripcion,
    visitar: destino.visitar,
    alojarse: destino.alojarse,
    comer: destino.comer,
  });

  const handleChange = (e, index, field) => {
    if (field === "nombre" || field === "descripcion") {
      setFormData({ ...formData, [field]: e.target.value });
    } else {
      const copy = [...formData[field]];
      copy[index] = e.target.value;
      setFormData({ ...formData, [field]: copy });
    }
  };

  const guardarCambios = () => {
    console.log("Datos guardados:", formData);
    alert("Cambios guardados (simulado, sin backend)");
  };

  const eliminarDestino = () => {
    alert("Destino eliminado (simulado, sin backend)");
  };

  return (
    <section>
      <div>
        <label>Nombre del destino:</label>
        <input
          type="text"
          value={formData.nombre}
          onChange={(e) => handleChange(e, null, "nombre")}
        />
      </div>
      <div>
        <label>Descripción del destino:</label>
        <textarea
          value={formData.descripcion}
          onChange={(e) => handleChange(e, null, "descripcion")}
        ></textarea>
      </div>

      <div>
        <img src={destino.imagen} alt="Imagen principal" width={300} />
        <img src={destino.mapa} alt="Mapa" width={300} />
      </div>

      <div>
        <h2>¿Qué visitar?</h2>
        {formData.visitar.map((item, i) => (
          <input
            key={i}
            type="text"
            value={item}
            onChange={(e) => handleChange(e, i, "visitar")}
          />
        ))}
        {destino.visitarFotos.map((foto, i) => (
          <img key={i} src={foto} width={300} alt="Visitar" />
        ))}
      </div>

      <div>
        <h2>¿Dónde alojarse?</h2>
        {formData.alojarse.map((item, i) => (
          <input
            key={i}
            type="text"
            value={item}
            onChange={(e) => handleChange(e, i, "alojarse")}
          />
        ))}
        {destino.alojarseFotos.map((foto, i) => (
          <img key={i} src={foto} width={300} alt="Alojamiento" />
        ))}
      </div>

      <div>
        <h2>¿Dónde comer?</h2>
        {formData.comer.map((item, i) => (
          <input
            key={i}
            type="text"
            value={item}
            onChange={(e) => handleChange(e, i, "comer")}
          />
        ))}
        {destino.comerFotos.map((foto, i) => (
          <img key={i} src={foto} width={300} alt="Comida" />
        ))}
      </div>

      <div>
        <button onClick={eliminarDestino}>Eliminar</button>
        <button onClick={guardarCambios}>Guardar</button>
      </div>
    </section>
  );
}



