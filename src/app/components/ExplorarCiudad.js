export default function ExplorarCiudad({ ciudad }) {
  if (!ciudad) return null;

  return (
    <main>
      <h1>{ciudad.nombre}</h1>
      <p>{ciudad.descripcion}</p>

      <div>
        <img src={ciudad.imagenPrincipal} alt={`${ciudad.nombre} principal`} />
        <img src={ciudad.imagenMapa} alt={`Mapa de ${ciudad.nombre}`} />
      </div>

      <hr />

      <section>
        <h2>¿Qué visitar?</h2>
        <ul>
          {ciudad.visitar.map((texto, index) => (
            <li key={index}>{texto}</li>
          ))}
        </ul>
        <div>
          <img src={ciudad.imagenVisitar} alt={`Visitar en ${ciudad.nombre}`} />
        </div>
      </section>

      <hr />

      <section>
        <h2>¿Dónde alojarse?</h2>
        <ul>
          {ciudad.alojarse.map((texto, index) => (
            <li key={index}>{texto}</li>
          ))}
        </ul>
        <div>
          <img src={ciudad.imagenAlojamiento} alt={`Alojamiento en ${ciudad.nombre}`} />
        </div>
      </section>

      <hr />

      <section>
        <h2>¿Dónde comer?</h2>
        <ul>
          {ciudad.comer.map((texto, index) => (
            <li key={index}>{texto}</li>
          ))}
        </ul>
        <div>
          <img src={ciudad.imagenComer} alt={`Comer en ${ciudad.nombre}`} />
        </div>
      </section>
    </main>
  );
}
