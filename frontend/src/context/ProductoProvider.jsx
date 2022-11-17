import { useState, useEfect, createContext } from "react";
import clienteAxios from "../../config/clienteAxios";

const ProductosContext = createContext();
const ProductosProvaider = ({ children }) => {
  const [productos, setProductos] = useState({});
  const [alerta, setAlerta] = useState([]);

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);

    setTimeout(() => {
      setAlerta({});
    }, 5000);
  };

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

  return (
    <ProductosContext.Provider
      value={{ productos, mostrarAlerta, alerta, submitProducto }}
    >
      {children}
    </ProductosContext.Provider>
  );
};
export { ProductosProvaider };
export default ProductosContext;
