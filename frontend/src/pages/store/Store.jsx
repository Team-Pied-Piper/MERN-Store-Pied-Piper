import "../../styles/store.css";
import { TarjetaProductos } from "./TarjetaProductos";
import useProductos from "../../hooks/useProductos";

const Store = () => {
  const { productos } = useProductos();
  return (
    <>
      <section className="section">
        <div className="section__titulo-container">
          <h1 className="section__titulo">Productos pied piper </h1>
        </div>
        <div className="section__contenedor-tarjetas-productos">
          {productos.length
            ? productos.map((el) => <TarjetaProductos key={el._id} el={el} />)
            : ""}
        </div>
      </section>
    </>
  );
};

export { Store };
