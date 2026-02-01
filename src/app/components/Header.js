import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur border-b border-black/10 sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <h1 className="text-lg sm:text-xl font-serif text-gray-700">
            Viajeros Aventureros
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="search"
            placeholder="Buscar destinos"
            className="hidden sm:block w-56 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm"
          />
          <img src="/cargar.png" alt="Cargar" className="h-6 w-6 opacity-70" />
          <Link href="/explorer">
            <img src="/casa.png" alt="Inicio" className="h-6 w-6 opacity-70" />
          </Link>
          <Link href="/user">
            <img src="/muñeco.png" alt="Usuario" className="h-6 w-6 opacity-70" />
          </Link>
        </div>
      </div>

      <div className="h-[2px] w-full bg-slate-200" />

      <nav className="flex justify-center gap-3 px-4 py-2">
        <a
          href="#visitar"
          className="rounded-md border border-gray-300 bg-white px-3 py-1 text-xs sm:text-sm hover:bg-gray-100"
        >
          ¿Qué visitar?
        </a>

        <a
          href="#alojarse"
          className="rounded-md border border-gray-300 bg-white px-3 py-1 text-xs sm:text-sm hover:bg-gray-100"
        >
          ¿Dónde alojarse?
        </a>

        <a
          href="#comer"
          className="rounded-md border border-gray-300 bg-white px-3 py-1 text-xs sm:text-sm hover:bg-gray-100"
        >
          ¿Dónde comer?
        </a>
      </nav>
    </header>
  );
}

