"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

export default function Explorer() {
  const router = useRouter();

  const handleSelect = (id) => {
    router.push(`/content/${id}`);
  };

  return (
    <>
      <Header/>
      <main>
        <h1>Amsterdam</h1>
        <p>
          Es la capital de los Países Bajos, conocida por sus canales pintorescos,
          casas con fachadas estrechas y su ambiente abierto y multicultural.
          Es famosa por su arquitectura histórica, museos como el Rijksmuseum y el de Van Gogh,
          y su cultura del uso de la bicicleta. Además, combina el encanto de una ciudad antigua
          con una vida moderna, artística y vibrante.
        </p>
        <div>
          <img src="/amsterdam1.png" alt="Amsterdam 1" />
          <img src="/mapa.png" alt="Mapa Amsterdam" />
        </div>
        <hr></hr>
        <section>
          <h2>¿Qué visitar?</h2>
          <ul>
            <li>Paseo en barco por los canales – La mejor forma de ver la ciudad desde el agua.</li>
            <li>Barrio de los Canales (Grachtengordel) – Zona Patrimonio de la Humanidad.</li>
            <li>Vondelpark – El parque más famoso, perfecto para pasear o hacer picnic.</li>
            <li>Jordaan – Barrio con calles estrechas, tiendas artesanales y cafés acogedores.</li>
          </ul>
          <div>
            <img src="/canal1.png" alt="Canal 1" />
          </div>
        </section>
        <hr></hr>
        <section>
          <h2>¿Dónde alojarse?</h2>
          <ul>
            <li>Jordaan</li>
            <li>De Pijp</li>
            <li>Oud-Zuid</li>
          </ul>
          <div>
            <img src="/hotel1.png" alt="Hotel 1" />
          </div>
        </section>
        <hr></hr>
        <section>
          <h2>¿Dónde comer?</h2>
          <ul>
            <li>Rob Wigboldus Vishandel</li>
            <li>Moeders</li>
            <li>Van Kerkwijk</li>
          </ul>
          <div>
            <img src="/comida1.png" alt="Comida 1" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

