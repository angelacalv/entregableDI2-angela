import { destinos } from "../mock/data";

export default function DestinoPage({ params }) {
  const destino = destinos.find((d) => d.id === params.id);

  if (!destino) {
    return <h1>Destino no encontrado</h1>;
  }

  return (
    <main>
      <h1>{destino.nombre}</h1>
      <p>{destino.descripcion}</p>

      <section>
        <img src={destino.imagen} alt={destino.nombre}/>
        <img src={destino.mapa} alt="Mapa"/>
      </section>

      <section>
        <h2>¿Qué visitar?</h2>
        <ul>
          {destino.visitar.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {destino.visitarFotos.map((foto, i) => (
          <img key={i} src={foto} alt="Lugar para visitar"/>
        ))}
      </section>

      <section>
        <h2>¿Dónde alojarse?</h2>
        <ul>
          {destino.alojarse.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {destino.alojarseFotos.map((foto, i) => (
          <img key={i} src={foto} alt="Hotel"/>
        ))}
      </section>

      <section>
        <h2>¿Dónde comer?</h2>
        <ul>
          {destino.comer.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {destino.comerFotos.map((foto, i) => (
          <img key={i} src={foto} alt="Comida"/>
        ))}
      </section>
    </main>
  );
}
