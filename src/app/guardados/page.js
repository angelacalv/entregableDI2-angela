import Header from "../components/Header";
import Footer from "../components/Footer";
import { destinos } from "../content/guardados";

export default function Guardados() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <section className="mx-auto w-full max-w-5xl px-4 py-8">
          <h1 className="mb-6 text-2xl font-semibold text-gray-800">
            Mis viajes guardados
          </h1>

          <div className="flex flex-col gap-6">
            {destinos.map((destino) => {
              const tieneDetalle = destino.id === 1; 

              return (
                <article
                  key={destino.id}
                  className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:flex-row"
                >
                  <div className="sm:w-1/3">
                    <img
                      src={destino.imagen}
                      alt={destino.nombre}
                      className="h-48 w-full object-cover sm:h-full"
                    />
                  </div>

                  <div className="flex flex-col justify-between p-4 sm:w-2/3">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {destino.nombre}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-gray-700">
                        {destino.descripcion}
                      </p>
                    </div>

                    <div className="mt-4 flex justify-end">
                      {tieneDetalle ? (
                        <a
                          href={`/content/${destino.id}?from=guardados`}
                          className="rounded-md border border-gray-300 bg-white px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Ver viaje
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="cursor-not-allowed rounded-md border border-gray-200 bg-gray-100 px-4 py-1.5 text-sm text-gray-400"
                          title="Próximamente"
                        >
                          Ver viaje
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
