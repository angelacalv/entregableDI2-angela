"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ExplorarCiudad from "../components/ExplorarCiudad";

export default function Explorer() {
  const ciudadAmsterdam = {
    id: 1,
    nombre: "Amsterdam",
    descripcion:
      "Es la capital de los Países Bajos, conocida por sus canales pintorescos, casas con fachadas estrechas y su ambiente abierto y multicultural. Es famosa por su arquitectura histórica, museos como el Rijksmuseum y el de Van Gogh, y su cultura del uso de la bicicleta. Además, combina el encanto de una ciudad antigua con una vida moderna, artística y vibrante.",
    imagenPrincipal: "/amsterdam1.png",
    imagenMapa: "/mapa.png",
    visitar: [
      "Paseo en barco por los canales – La mejor forma de ver la ciudad desde el agua.",
      "Barrio de los Canales (Grachtengordel) – Zona Patrimonio de la Humanidad.",
      "Vondelpark – El parque más famoso, perfecto para pasear o hacer picnic.",
      "Jordaan – Barrio con calles estrechas, tiendas artesanales y cafés acogedores.",
    ],
    imagenVisitar: "/canal1.png",
    alojarse: ["Jordaan", "De Pijp", "Oud-Zuid"],
    imagenAlojamiento: "/hotel1.png",
    comer: ["Rob Wigboldus Vishandel", "Moeders", "Van Kerkwijk"],
    imagenComer: "/comida1.png",
  };

  return (
    <>
      <Header />
      <ExplorarCiudad ciudad={ciudadAmsterdam} />
      <Footer />
    </>
  );
}
