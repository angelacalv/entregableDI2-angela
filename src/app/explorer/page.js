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

    imagenesPrincipal: ["/amsterdam-1.png", "/amsterdam-2.png", "/amsterdam-3.png"],
    imagenesMapa: "/mapa.png",

    visitar: [
      "Paseo en barco por los canales – La mejor forma de ver la ciudad desde el agua.",
      "Barrio de los Canales (Grachtengordel) – Zona Patrimonio de la Humanidad.",
      "Vondelpark – El parque más famoso, perfecto para pasear o hacer picnic.",
      "Jordaan – Barrio con calles estrechas, tiendas artesanales y cafés acogedores.",
    ],
    imagenesVisitar: ["/visitar-1.png", "/visitar-2.png", "/visitar-3.png"],

    alojarse: ["Jordaan", "De Pijp", "Oud-Zuid"],
    imagenesAlojamiento: ["/alojarse-1.png", "/alojarse-2.png", "/alojarse-3.png"],

    comer: ["Rob Wigboldus Vishandel", "Moeders", "Van Kerkwijk"],
    imagenesComer: ["/comer-1.png", "/comer-2.png", "/comer-3.png"],
  };

  return (
    <>
      <Header />
      <ExplorarCiudad ciudad={ciudadAmsterdam} />
      <Footer />
    </>
  );
}

