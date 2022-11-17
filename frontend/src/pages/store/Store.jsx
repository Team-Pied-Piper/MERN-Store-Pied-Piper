import "../../styles/store.css";
import { TarjetaProductos } from "./TarjetaProductos";

const Store = () => {
  return (
    <>
      <section className="section">
        <div className="section__titulo-container">
          <h1 className="section__titulo">Productos pied piper </h1>
        </div>
        <div className="section__contenedor-tarjetas-productos">
          <TarjetaProductos />
        </div>
      </section>
    </>
  );
};

export { Store };
