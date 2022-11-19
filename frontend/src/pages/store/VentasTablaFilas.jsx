const VentasTablaFilas = ({ el }) => {
  return (
    <tr>
      <td>{el.fecha}</td>
      <td>{el._id}</td>
      <td>{el.cantidad}</td>
      <td>{el.valor}</td>
    </tr>
  );
};

export { VentasTablaFilas };
