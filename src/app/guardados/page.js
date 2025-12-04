import Header from "../components/Header";
import Footer from "../components/Footer";
import { destinos } from "../content/guardados";

export default function Guardados() {
  return (
    <>
        <Header />
        <main>
            <h1>Mis viajes guardados</h1>
            {destinos.map((destino, index) => (
            <section key={index}>
                <div>
                    <img src={destino.imagen} alt={destino.nombre} />
                    <div>
                        <h2>{destino.nombre}</h2>
                        <p>{destino.descripcion}</p>
                    </div>
                </div>
            </section>
            ))}
        </main>
        <Footer />
    </>
  );
}