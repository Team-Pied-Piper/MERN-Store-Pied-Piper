import deleteImg from "../../images/delete.png";
import editImg from "../../images/edit.png";
import useProductos from "../../hooks/useProductos";

const TablaProductosAdminFilas = ({ el, setdataEdit }) => {
  let { img, nombre, precio, stock, id } = el;

  //formateador de moneda
  function formatearMoneda(numero) {
    return new Intl.NumberFormat().format(numero);
  }
  //formateador de moneda

  //obtener producto
  const { obtenerProducto, producto } = useProductos();
  const editarProducto = () => {
    obtenerProducto(el._id);
    setdataEdit(producto);
  };

  //obtener producto
  return (
    <tr>
      <td>
        <img
          src={el.img}
          alt="imagen"
          className="listaProductos__img-producto"
        />
      </td>
      <td>{el.nombre}</td>
      <td>${formatearMoneda(el.precio)}</td>
      <td>{el.stock}</td>
      <td className="listaProductos__acciones">
        <img
          src={editImg}
          alt="icono editar"
          className="listaProductos__icono"
          onClick={() => editarProducto(el)}
        />
        <img src={deleteImg} className="listaProductos__icono" />
      </td>
    </tr>
  );
};

export { TablaProductosAdminFilas };
