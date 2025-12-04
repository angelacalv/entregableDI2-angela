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
      <main>
        <section>
          <div>
            <div>
              <img src="/muñeco.png" alt="Perfil" />
              <h2>{user.usuario}</h2>
            </div>

            {editMode ? (
              <button onClick={handleSave}>Guardar</button>
            ) : (
              <button onClick={() => setEditMode(true)}>Editar</button>
            )}
          </div>

          <div>
            {editMode ? (
              <>
                <p>
                  <strong>Nombre:</strong>
                  <input
                    name="nombre"
                    value={user.nombre}
                    onChange={handleChange}
                  />
                </p>

                <p>
                  <strong>Nombre de usuario:</strong>
                  <input
                    name="usuario"
                    value={user.usuario}
                    onChange={handleChange}
                  />
                </p>

                <p>
                  <strong>Correo electrónico:</strong>
                  <input
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </p>

                <p>
                  <strong>Teléfono:</strong>
                  <input
                    name="telefono"
                    value={user.telefono}
                    onChange={handleChange}
                  />
                </p>

                <p>
                  <strong>Contraseña:</strong>
                  <input
                    name="contraseña"
                    value={user.contraseña}
                    onChange={handleChange}
                    type="password"
                  />
                </p>
              </>
            ) : (
              <>
                <p><strong>Nombre:</strong> {user.nombre}</p>
                <p><strong>Nombre de usuario:</strong> {user.usuario}</p>
                <p><strong>Correo electrónico:</strong> {user.email}</p>
                <p><strong>Teléfono:</strong> {user.telefono}</p>
                <p><strong>Contraseña:</strong> {user.contraseña}</p>
              </>
            )}
          </div>

          <div>
            <button>
              <a href="/loginUsuario">Cerrar Sesión</a>
            </button>

            <button>
              <a href="/guardados">Mis viajes guardados</a>
            </button>
          </div>

        </section>
      </main>
    </>
  );
}