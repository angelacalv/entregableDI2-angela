export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: "url('/mapa-fondo2.png')" }}
    >

      <div className="w-full max-w-4xl bg-gray-600/20 backdrop-blur-sm rounded-2xl px-6 py-10 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-5xl font-serif text-white drop-shadow">
          Viajeros Aventureros
        </h1>

        <p className="mt-2 text-white/90 italic text-sm sm:text-base drop-shadow">
          "Descubre el mundo con nosotros"
        </p>

        <div className="mt-8 flex flex-col gap-4 w-full max-w-xs">
          <a
            href="/login"
            className="rounded-md bg-white/80 hover:bg-white text-gray-700 border border-gray-300 py-2 text-sm shadow-sm"
          >
            Iniciar Sesión
          </a>

          <a
            href="/registro"
            className="rounded-md bg-white/80 hover:bg-white text-gray-700 border border-gray-300 py-2 text-sm shadow-sm"
          >
            Registrarse
          </a>
        </div>

        <p className="mt-10 text-[10px] sm:text-xs tracking-widest text-white/90 drop-shadow">
          EL MUNDO ES DEMASIADO GRANDE PARA QUEDARSE EN UN SOLO LUGAR
        </p>
      </div>
    </main>
  );
}
