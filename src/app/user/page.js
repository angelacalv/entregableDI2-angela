"use client";

import { useState } from "react";
import Header from "../components/Header";

export default function UserArea() {
  const [user, setUser] = useState({
    nombre: "Ángela Calvente",
    usuario: "Angela_calv",
    email: "angela_calv@icloud.com",
    telefono: "+34 605 677 849",
    contraseña: "**********",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setEditMode(false);
  };

  return (
    <>
      <Header />

      <main className="bg-white">
        <section className="mx-auto w-full max-w-4xl px-4 py-8">
          {/* Tarjeta principal */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {/* Cabecera tarjeta */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/muñeco.png"
                  alt="Perfil"
                  className="h-10 w-10 opacity-80"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {user.usuario}
                  </h2>
                  <p className="text-xs text-gray-500">
                    Área de usuario
                  </p>
                </div>
              </div>

              {editMode ? (
                <button
                  onClick={handleSave}
                  className="rounded-md border border-gray-300 bg-white px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Guardar
                </button>
              ) : (
                <button
                  onClick={() => setEditMode(true)}
                  className="rounded-md border border-gray-300 bg-white px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Editar
                </button>
              )}
            </div>

            {/* Separador */}
            <div className="my-5 h-px w-full bg-slate-200" />

            {/* Contenido */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Campo */}
              <div>
                <p className="text-xs font-semibold text-gray-600">Nombre</p>
                {editMode ? (
                  <input
                    name="nombre"
                    value={user.nombre}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-800">{user.nombre}</p>
                )}
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-600">
                  Nombre de usuario
                </p>
                {editMode ? (
                  <input
                    name="usuario"
                    value={user.usuario}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-800">{user.usuario}</p>
                )}
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-600">
                  Correo electrónico
                </p>
                {editMode ? (
                  <input
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-800">{user.email}</p>
                )}
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-600">Teléfono</p>
                {editMode ? (
                  <input
                    name="telefono"
                    value={user.telefono}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-800">{user.telefono}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <p className="text-xs font-semibold text-gray-600">Contraseña</p>
                {editMode ? (
                  <input
                    name="contraseña"
                    value={user.contraseña}
                    onChange={handleChange}
                    type="password"
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
                  />
                ) : (
                  <p className="mt-1 text-sm text-gray-800">{user.contraseña}</p>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <a
                href="/home"
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm text-gray-700 hover:bg-gray-50"
              >
                Cerrar sesión
              </a>

              <a
                href="/guardados"
                className="rounded-md border border-emerald-300 bg-white px-4 py-2 text-center text-sm text-emerald-700 hover:bg-emerald-50"
              >
                Mis viajes guardados
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
