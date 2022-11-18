import { useState, useEffect, createContext } from "react";
import clienteAxios from "../../config/clienteAxios";

const ProductosContext = createContext();
const ProductosProvaider = ({ children }) => {
  const [productos, setProductos] = useState({});
  const [alerta, setAlerta] = useState({}); //generar alertas de productos
  const [producto, setProducto] = useState({});

  //trar productos con useEfect
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await clienteAxios.get("/productos", config);
        setProductos(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerProductos();
  }, []);

  //trar productos con useEfect

  //genera alerta y la oculta en 5 seg
  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);

    setTimeout(() => {
      setAlerta({});
    }, 5000);
  };
  //genera alerta y la oculta en 5 seg

  // Agregar nuevo producto
  const submitProducto = async (producto) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clienteAxios.post("/productos", producto, config);

      setProductos([...productos, data]); //actualiza vista de productos

      setAlerta({
        msg: "✔️ Producto agregado correctamente. ",
        error: false,
      });

      setTimeout(() => {
        setAlerta({});
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  // Agregar nuevo producto

  // Obtener producto
  const obtenerProducto = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.get(`/productos/${id}`, config);
      setProducto(data);
    } catch (error) {
      console.log(error);
    }
  };
  // Obtener producto

  return (
    <ProductosContext.Provider
      value={{
        productos,
        mostrarAlerta,
        alerta,
        submitProducto,
        obtenerProducto,
        producto,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};
export { ProductosProvaider };
export default ProductosContext;
