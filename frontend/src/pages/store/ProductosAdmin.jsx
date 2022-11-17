import "../../styles/productosAdmin.css";
import useProductos from "../../hooks/useProductos";
import { TablaProductosAdminCabezera } from "./TablaProductosAdminCabezera";
import { FormularioProductosAdmin } from "./FormularioProductosAdmin";

const ProductosAdmin = () => {
  const { productos } = useProductos();

  console.log(productos);

  return (
    <section className="section">
      <div className="section__titulo-container">
        <h1 className="section__titulo">Lista de productos</h1>
      </div>
      <div className="listaProductos__contenedor">
        <div className="listaProductos__tabla">
          <TablaProductosAdminCabezera />
        </div>
        <div className="listaProductos__formulario">
          <FormularioProductosAdmin />
        </div>
      </div>
    </section>
  );
};

export { ProductosAdmin };
