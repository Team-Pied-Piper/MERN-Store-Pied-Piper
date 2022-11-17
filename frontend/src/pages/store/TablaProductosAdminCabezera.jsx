import { TablaProductosAdminFilas } from "./TablaProductosAdminFilas";

const TablaProductosAdminCabezera = () => {
  return (
    <div>
      <h3 className="listaProductos__titulo">Lista de todos los productos</h3>
      <table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <TablaProductosAdminFilas />
        </tbody>
      </table>
    </div>
  );
};

export { TablaProductosAdminCabezera };
