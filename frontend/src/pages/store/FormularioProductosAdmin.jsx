import { useState } from "react";
import { Alerta } from "../../components/Alerta";
import useProductos from "../../hooks/useProductos";

const FormularioProductosAdmin = () => {
  //traer datos del formulario-----
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [img, setImg] = useState("");
  //traer datos del formulario-----

  const { mostrarAlerta, alerta, submitProducto } = useProductos(); //extraer funciones de hook personalizado

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, descripcion, precio, stock, img].includes("")) {
      mostrarAlerta({
        msg: "todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    //enviar datos a provaider y a API
    await submitProducto({ nombre, descripcion, precio, stock, img });

    setNombre("");
    setDescripcion("");
    setPrecio("");
    setStock("");
    setImg("");
  };

  const { msg } = alerta;
  return (
    <div>
      <h3 className="listaProductos__titulo">
        {/* {dataToEdit ? "Editar producto seleccionado" : "Agregar nuevo producto"} */}
      </h3>
      <form
        onSubmit={handleSubmit}
        className="listaProductos__contenedor-formulario"
      >
        {/* //-----input nombre */}
        <div className="listaProductos__contenedor-inputs">
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre del producto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        {/* //-----input descripcion */}
        <div className="listaProductos__contenedor-inputs">
          <label htmlFor="descripcion">Descripcion: </label>
          <textarea
            id="descripcion"
            placeholder="Descripcion del producto"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </div>
        {/* //-----input precio */}
        <div className="listaProductos__contenedor-inputs">
          <label htmlFor="precio">Precio: </label>
          <input
            type="number"
            id="precio"
            placeholder="Precio del producto $$$"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        {/* //-----input stock */}
        <div className="listaProductos__contenedor-inputs">
          <label htmlFor="stock">Stock: </label>
          <input
            type="number"
            id="stock"
            placeholder="Cantidad diponible"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        {/* //-----input img */}
        <div className="listaProductos__contenedor-inputs">
          <label htmlFor="img">URL Imagen: </label>
          <input
            type="text"
            id="img"
            placeholder="Direccion URL de la imagen"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        {/* //-----input botones */}
        <div className="listaProductos__contenedor-btn">
          <input
            type="submit"
            value="Guardar"
            className="listaProductos__btn-guardar"
          />
          <input
            type="reset"
            value="Limpiar"
            className="listaProductos__btn-limpiar"
          />
        </div>
      </form>
      {msg && <Alerta alerta={alerta} />}
    </div>
  );
};

export { FormularioProductosAdmin };
