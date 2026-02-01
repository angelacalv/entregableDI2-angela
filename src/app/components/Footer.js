export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-4 px-4 py-6">
        <p className="text-xs text-gray-500">
          © 2025 – Viajeros Aventureros
        </p>
        <img src="/aplicaciones.png" alt="Apps" className="h-8" />
      </div>
    </footer>
  );
}

