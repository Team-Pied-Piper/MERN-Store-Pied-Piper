import deleteImg from "../../images/delete.png";
import editImg from "../../images/edit.png";

const TablaProductosAdminFilas = () => {
  return (
    <tr>
      <td>
        <img src="" alt="imagen" className="listaProductos__img-producto" />
      </td>
      <td>nombre prod</td>
      <td>precio prod</td>
      <td>stock prod</td>
      <td className="listaProductos__acciones">
        <img
          src={editImg}
          alt="icono editar"
          className="listaProductos__icono"
        />
        <img src={deleteImg} className="listaProductos__icono" />
      </td>
    </tr>
  );
};

export { TablaProductosAdminFilas };
