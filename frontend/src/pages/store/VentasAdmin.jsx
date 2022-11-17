import { VentasTabalaCabecera } from "./VentasTabalaCabecera";

const VentasAdmin = () => {
  return (
    <>
      <div className="section__titulo-container">
        <h1 className="section__titulo">Reporte de ventas</h1>
      </div>

      <div className="section__contenedor-tarjetas-productos">
        <VentasTabalaCabecera />
      </div>
    </>
  );
};

export { VentasAdmin };
