"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Admin() {
  const IMGS = {
    principal: "/amsterdam1.png",
    mapa: "/mapa.png",
    visitar: "/canal1.png",
    alojarse: "/hotel1.png",
    comer: "/comida1.png",
  };

  const [ciudad, setCiudad] = useState({
    nombre: "Amsterdam",
    descripcion:
      "Es la capital de los Países Bajos, conocida por sus canales pintorescos, casas con fachadas estrechas y su ambiente abierto y multicultural. Es famosa por su arquitectura histórica, museos como el Rijksmuseum y el de Van Gogh, y su cultura del uso de la bicicleta. Además, combina el encanto de una ciudad antigua con una vida moderna, artística y vibrante.",
    lugaresVisitar: [
      "Paseo en barco por los canales – La mejor forma de ver la ciudad desde el agua.",
      "Barrio de los Canales (Grachtengordel) – Zona Patrimonio de la Humanidad.",
      "Vondelpark – El parque más famoso, perfecto para pasear o hacer picnic.",
      "Jordaan – Barrio con calles estrechas, tiendas artesanales y cafés acogedores.",
    ],
    alojamientos: ["Jordaan", "De Pijp", "Oud-Zuid"],
    restaurantes: ["Rob Wigboldus Vishandel", "Moeders", "Van Kerkwijk"],
  });

  const [editMode, setEditMode] = useState(false);
  const [crearMode, setCrearMode] = useState(false);

  const [nuevaCiudad, setNuevaCiudad] = useState({
    nombre: "",
    descripcion: "",
    lugaresVisitar: [""],
    alojamientos: [""],
    restaurantes: [""],
  });

  const [error, setError] = useState("");

  const validarListas = (lista, nombreCampo) => {
    if (!lista || lista.length === 0) return `${nombreCampo} no puede estar vacío.`;
    const hayVacios = lista.some((x) => !x || !x.trim());
    if (hayVacios) return `Revisa ${nombreCampo}: no se permiten campos vacíos.`;
    return "";
  };

  const validarCiudad = (obj) => {
    if (!obj.nombre.trim()) return "El nombre es obligatorio.";
    if (!obj.descripcion.trim()) return "La descripción es obligatoria.";

    const errVisitar = validarListas(obj.lugaresVisitar, "lugares a visitar");
    if (errVisitar) return errVisitar;

    const errAloj = validarListas(obj.alojamientos, "alojamientos");
    if (errAloj) return errAloj;

    const errRest = validarListas(obj.restaurantes, "restaurantes");
    if (errRest) return errRest;

    return "";
  };

  const handleChange = (e, isNueva = false) => {
    const { name, value } = e.target;
    setError("");

    if (isNueva) {
      setNuevaCiudad((prev) => ({ ...prev, [name]: value }));
    } else {
      setCiudad((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleListChange = (listName, index, value, isNueva = false) => {
    setError("");

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
      setNuevaCiudad((prev) => ({
        ...prev,
        [listName]: updatedList.length ? updatedList : [""],
      }));
    } else {
      const updatedList = [...ciudad[listName]];
      updatedList.splice(index, 1);
      setCiudad((prev) => ({
        ...prev,
        [listName]: updatedList.length ? updatedList : [""],
      }));
    }
  };

  const handleSave = () => {
    const msg = validarCiudad(ciudad);
    if (msg) {
      setError(msg);
      return;
    }
    setEditMode(false);
    setError("");
  };

  const handleCrear = () => {
    const msg = validarCiudad(nuevaCiudad);
    if (msg) {
      setError(msg);
      return;
    }

    setCiudad(nuevaCiudad);
    setCrearMode(false);

    setNuevaCiudad({
      nombre: "",
      descripcion: "",
      lugaresVisitar: [""],
      alojamientos: [""],
      restaurantes: [""],
    });

    setError("");
  };

  const handleCancelar = () => {
    setCrearMode(false);
    setEditMode(false);
    setError("");
    setNuevaCiudad({
      nombre: "",
      descripcion: "",
      lugaresVisitar: [""],
      alojamientos: [""],
      restaurantes: [""],
    });
  };

  const actual = crearMode ? nuevaCiudad : ciudad;
  const esEdicion = crearMode || editMode;

  return (
    <>
      <Header />

      <main className="bg-white">
        <section className="mx-auto w-full max-w-5xl px-4 py-8">

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">
              Panel de administrador
            </h1>

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <button
                onClick={() => {
                  setCrearMode(true);
                  setEditMode(false);
                  setError("");
                }}
                className="rounded-md border border-emerald-300 bg-white px-4 py-2 text-sm text-emerald-700 hover:bg-emerald-50"
              >
                Crear
              </button>

              {editMode ? (
                <button
                  onClick={handleSave}
                  className="rounded-md border border-emerald-300 bg-white px-4 py-2 text-sm text-emerald-700 hover:bg-emerald-50"
                >
                  Guardar
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditMode(true);
                    setCrearMode(false);
                    setError("");
                  }}
                  className="rounded-md border border-emerald-300 bg-white px-4 py-2 text-sm text-emerald-700 hover:bg-emerald-50"
                >
                  Modificar
                </button>
              )}

              {esEdicion && (
                <button
                  onClick={handleCancelar}
                  className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </button>
              )}
            </div>
          </div>

          {error && (
            <div className="mb-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Nombre del destino
                </label>

                {esEdicion ? (
                  <input
                    name="nombre"
                    value={actual.nombre}
                    onChange={(e) => handleChange(e, crearMode)}
                    className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-emerald-300"
                    placeholder="Ej: Amsterdam"
                  />
                ) : (
                  <p className="mt-1 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-gray-800">
                    {ciudad.nombre}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Descripción del destino
                </label>

                {esEdicion ? (
                  <textarea
                    name="descripcion"
                    value={actual.descripcion}
                    onChange={(e) => handleChange(e, crearMode)}
                    className="mt-1 min-h-[90px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-emerald-300"
                    placeholder="Escribe una descripción..."
                  />
                ) : (
                  <p className="mt-1 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-gray-800">
                    {ciudad.descripcion}
                  </p>
                )}
              </div>
            </div>

            {!crearMode && (
              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-md border border-slate-200">
                  <img
                    src={IMGS.principal}
                    alt="Imagen destino"
                    className="h-48 w-full object-cover md:h-56"
                  />
                </div>
                <div className="overflow-hidden rounded-md border border-slate-200">
                  <img
                    src={IMGS.mapa}
                    alt="Mapa"
                    className="h-48 w-full object-cover md:h-56"
                  />
                </div>
              </div>
            )}

            <div className="my-6 h-[2px] w-full bg-slate-200" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <SeccionLista
                titulo="¿Qué visitar?"
                items={actual.lugaresVisitar}
                editable={esEdicion}
                onChange={(i, v) =>
                  handleListChange("lugaresVisitar", i, v, crearMode)
                }
                onAdd={() => handleAddItem("lugaresVisitar", crearMode)}
                onRemove={(i) => handleRemoveItem("lugaresVisitar", i, crearMode)}
              />

              {!crearMode && (
                <div className="flex items-start justify-center md:justify-end">
                  <div className="overflow-hidden rounded-md border border-slate-200">
                    <img
                      src={IMGS.visitar}
                      alt="Foto visitar"
                      className="h-40 w-full object-cover sm:h-44 md:h-48 md:w-[420px]"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="my-6 h-[2px] w-full bg-slate-200" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <SeccionChipsConFoto
                titulo="¿Dónde alojarse?"
                items={actual.alojamientos}
                editable={esEdicion}
                onChange={(i, v) =>
                  handleListChange("alojamientos", i, v, crearMode)
                }
                onAdd={() => handleAddItem("alojamientos", crearMode)}
                onRemove={(i) => handleRemoveItem("alojamientos", i, crearMode)}
                mostrarFoto={!crearMode}
                fotoSrc={IMGS.alojarse}
                fotoAlt="Foto alojamiento"
              />

              <SeccionChipsConFoto
                titulo="¿Dónde comer?"
                items={actual.restaurantes}
                editable={esEdicion}
                onChange={(i, v) =>
                  handleListChange("restaurantes", i, v, crearMode)
                }
                onAdd={() => handleAddItem("restaurantes", crearMode)}
                onRemove={(i) => handleRemoveItem("restaurantes", i, crearMode)}
                mostrarFoto={!crearMode}
                fotoSrc={IMGS.comer}
                fotoAlt="Foto comer"
              />
            </div>

            {crearMode && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleCrear}
                  className="w-full max-w-md rounded-md border border-emerald-300 bg-white px-6 py-2 text-sm text-emerald-700 hover:bg-emerald-50"
                >
                  Publicar
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function SeccionLista({ titulo, items, editable, onChange, onAdd, onRemove }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-800">{titulo}</h2>

      {!editable ? (
        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
          {items.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      ) : (
        <div className="mt-3 flex flex-col gap-2">
          {items.map((x, i) => (
            <div key={i} className="flex gap-2">
              <input
                value={x}
                onChange={(e) => onChange(i, e.target.value)}
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-emerald-300"
              />
              <button
                onClick={() => onRemove(i)}
                className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Eliminar
              </button>
            </div>
          ))}

          <button
            onClick={onAdd}
            className="mt-1 w-full rounded-md border border-emerald-300 bg-white px-4 py-2 text-sm text-emerald-700 hover:bg-emerald-50"
          >
            + Añadir
          </button>
        </div>
      )}
    </section>
  );
}

function SeccionChipsConFoto({
  titulo,
  items,
  editable,
  onChange,
  onAdd,
  onRemove,
  mostrarFoto,
  fotoSrc,
  fotoAlt,
}) {
  return (
    <section className="rounded-md border border-slate-200 p-4">
      <h2 className="text-base font-semibold text-gray-800">{titulo}</h2>

      {!editable ? (
        <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700">
          {items.map((x, i) => (
            <li key={i} className="ml-4 list-disc">
              {x}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-3 flex flex-col gap-2">
          {items.map((x, i) => (
            <div key={i} className="flex gap-2">
              <input
                value={x}
                onChange={(e) => onChange(i, e.target.value)}
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-emerald-300"
              />
              <button
                onClick={() => onRemove(i)}
                className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Eliminar
              </button>
            </div>
          ))}

          <button
            onClick={onAdd}
            className="mt-1 w-full rounded-md border border-emerald-300 bg-white px-4 py-2 text-sm text-emerald-700 hover:bg-emerald-50"
          >
            + Añadir
          </button>
        </div>
      )}

      {mostrarFoto && (
        <div className="mt-3 overflow-hidden rounded-md border border-slate-200">
          <img src={fotoSrc} alt={fotoAlt} className="h-32 w-full object-cover sm:h-36" />
        </div>
      )}
    </section>
  );
}
