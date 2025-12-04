export default function Home() {
  return (
    <main>
      <h1>Viajeros Aventureros</h1>
      <p>"Descubre el mundo con nosotros"</p>

      <button>
        <a href="/loginUsuario">Iniciar sesión</a>
      </button>

      <button>
        <a href="/registro">Registrarse</a>
      </button>

      {/* Acceso administrador */}
      <a href="/admin">
        <img src="/herramientas.png" alt="Administrador" />
      </a>

      <p>EL MUNDO ES DEMASIADO GRANDE PARA QUEDARSE EN UN SOLO LUGAR</p>
    </main>
  );
}


