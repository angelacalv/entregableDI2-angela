"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Explorer() {
  const [ciudad, setCiudad] = useState({
    nombre: "Amsterdam",
    descripcion:
      "Es la capital de los Países Bajos, conocida por sus canales pintorescos, casas con fachadas estrechas y su ambiente abierto y multicultural. Es famosa por su arquitectura histórica, museos como el Rijksmuseum y el de Van Gogh, y su cultura del uso de la bicicleta. Además, combina el encanto de una ciudad antigua con una vida moderna, artística y vibrante.",
    lugaresVisitar: [
      "Paseo en barco por los canales – La mejor forma de ver la ciudad desde el agua.",
      "Barrio de los Canales (Grachtengordel) – Zona Patrimonio de la Humanidad.",
      "Vondelpark – El parque más famoso, perfecto para pasear o hacer picnic.",
      "Jordaan – Barrio con calles estrechas, tiendas artesanales y cafés acogedores."
    ],
    alojamientos: ["Jordaan", "De Pijp", "Oud-Zuid"],
    restaurantes: ["Rob Wigboldus Vishandel", "Moeders", "Van Kerkwijk"]
  });

  const [editMode, setEditMode] = useState(false);
  const [crearMode, setCrearMode] = useState(false); 
  const [nuevaCiudad, setNuevaCiudad] = useState({
    nombre: "",
    descripcion: "",
    lugaresVisitar: [""],
    alojamientos: [""],
    restaurantes: [""]
  });

  const handleChange = (e, isNueva = false) => {
    const { name, value } = e.target;
    if (isNueva) {
      setNuevaCiudad((prev) => ({ ...prev, [name]: value }));
    } else {
      setCiudad((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleListChange = (listName, index, value, isNueva = false) => {
    if (isNueva) {
      const updatedList = [...nuevaCiudad[listName]];
      updatedList[index] = value;
      setNuevaCiudad((prev) => ({ ...prev, [listName]: updatedList }));
    } else {
      const updatedList = [...ciudad[listName]];
      updatedList[index] = value;
      setCiudad((prev) => ({ ...prev, [listName]: updatedList }));
    }
  };

  const handleAddItem = (listName, isNueva = false) => {
    if (isNueva) {
      setNuevaCiudad((prev) => ({ ...prev, [listName]: [...prev[listName], ""] }));
    } else {
      setCiudad((prev) => ({ ...prev, [listName]: [...prev[listName], ""] }));
    }
  };

  const handleRemoveItem = (listName, index, isNueva = false) => {
    if (isNueva) {
      const updatedList = [...nuevaCiudad[listName]];
      updatedList.splice(index, 1);
      setNuevaCiudad((prev) => ({ ...prev, [listName]: updatedList }));
    } else {
      const updatedList = [...ciudad[listName]];
      updatedList.splice(index, 1);
      setCiudad((prev) => ({ ...prev, [listName]: updatedList }));
    }
  };

  const handleSave = () => {
    setEditMode(false);
  };

  const handleCrear = () => {
    setCiudad(nuevaCiudad);
    setCrearMode(false);
    setNuevaCiudad({
      nombre: "",
      descripcion: "",
      lugaresVisitar: [""],
      alojamientos: [""],
      restaurantes: [""]
    });
  };

  return (
    <>
      <Header />
      <div>
        <button onClick={() => setCrearMode(true)}>Crear</button>
        {editMode ? (
          <button onClick={handleSave}>Guardar</button>
        ) : (
          <button onClick={() => setEditMode(true)}>Modificar</button>
        )}
      </div>

      <main>
        {crearMode ? (
          <>
            <h2>Crear nueva ciudad</h2>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre de la ciudad"
              value={nuevaCiudad.nombre}
              onChange={(e) => handleChange(e, true)}
            />
            <textarea
              name="descripcion"
              placeholder="Descripción"
              value={nuevaCiudad.descripcion}
              onChange={(e) => handleChange(e, true)}
            />

            <h3>Lugares a visitar</h3>
            <ul>
              {nuevaCiudad.lugaresVisitar.map((lugar, i) => (
                <li key={i}>
                  <input
                    type="text"
                    value={lugar}
                    onChange={(e) => handleListChange("lugaresVisitar", i, e.target.value, true)}
                  />
                  <button onClick={() => handleRemoveItem("lugaresVisitar", i, true)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <button onClick={() => handleAddItem("lugaresVisitar", true)}>+ Agregar lugar</button>

            <h3>Alojamientos</h3>
            <ul>
              {nuevaCiudad.alojamientos.map((aloj, i) => (
                <li key={i}>
                  <input
                    type="text"
                    value={aloj}
                    onChange={(e) => handleListChange("alojamientos", i, e.target.value, true)}
                  />
                  <button onClick={() => handleRemoveItem("alojamientos", i, true)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <button onClick={() => handleAddItem("alojamientos", true)}>+ Agregar alojamiento</button>

            <h3>Restaurantes</h3>
            <ul>
              {nuevaCiudad.restaurantes.map((rest, i) => (
                <li key={i}>
                  <input
                    type="text"
                    value={rest}
                    onChange={(e) => handleListChange("restaurantes", i, e.target.value, true)}
                  />
                  <button onClick={() => handleRemoveItem("restaurantes", i, true)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <button onClick={() => handleAddItem("restaurantes", true)}>+ Agregar restaurante</button>

            <div>
              <button onClick={handleCrear}>Guardar ciudad</button>
              <button onClick={() => setCrearMode(false)}>Cancelar</button>
            </div>
          </>
        ) : (
          <>
            {editMode ? (
              <>
                <input
                  type="text"
                  name="nombre"
                  value={ciudad.nombre}
                  onChange={handleChange}
                />
                <textarea
                  name="descripcion"
                  value={ciudad.descripcion}
                  onChange={handleChange}
                />
              </>
            ) : (
              <>
                <h1>{ciudad.nombre}</h1>
                <p>{ciudad.descripcion}</p>
              </>
            )}

            <div>
              <img src="/amsterdam1.png" alt="Amsterdam 1" />
              <img src="/mapa.png" alt="Mapa Amsterdam" />
            </div>

            <hr />

            <section>
              <h2>¿Qué visitar?</h2>
              <ul>
                {ciudad.lugaresVisitar.map((lugar, i) =>
                  editMode ? (
                    <li key={i}>
                      <input
                        type="text"
                        value={lugar}
                        onChange={(e) => handleListChange("lugaresVisitar", i, e.target.value)}
                      />
                      <button onClick={() => handleRemoveItem("lugaresVisitar", i)}>Eliminar</button>
                    </li>
                  ) : (
                    <li key={i}>{lugar}</li>
                  )
                )}
              </ul>
              {editMode && <button onClick={() => handleAddItem("lugaresVisitar")}>+ Agregar lugar</button>}
            </section>

            <hr />

            <section>
              <h2>¿Dónde alojarse?</h2>
              <ul>
                {ciudad.alojamientos.map((aloj, i) =>
                  editMode ? (
                    <li key={i}>
                      <input
                        type="text"
                        value={aloj}
                        onChange={(e) => handleListChange("alojamientos", i, e.target.value)}
                      />
                      <button onClick={() => handleRemoveItem("alojamientos", i)}>Eliminar</button>
                    </li>
                  ) : (
                    <li key={i}>{aloj}</li>
                  )
                )}
              </ul>
              {editMode && <button onClick={() => handleAddItem("alojamientos")}>+ Agregar alojamiento</button>}
            </section>

            <hr />

            <section>
              <h2>¿Dónde comer?</h2>
              <ul>
                {ciudad.restaurantes.map((rest, i) =>
                  editMode ? (
                    <li key={i}>
                      <input
                        type="text"
                        value={rest}
                        onChange={(e) => handleListChange("restaurantes", i, e.target.value)}
                      />
                      <button onClick={() => handleRemoveItem("restaurantes", i)}>Eliminar</button>
                    </li>
                  ) : (
                    <li key={i}>{rest}</li>
                  )
                )}
              </ul>
              {editMode && <button onClick={() => handleAddItem("restaurantes")}>+ Agregar restaurante</button>}
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
