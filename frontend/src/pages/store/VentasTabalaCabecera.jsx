import { VentasTablaFilas } from "./VentasTablaFilas";

const VentasTabalaCabecera = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mes/Dia/Año - Hora</th>
            <th>ID Venta</th>
            <th>Cantidad Productos</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <VentasTablaFilas />
        </tbody>
      </table>
    </div>
  );
};

export { VentasTabalaCabecera };
