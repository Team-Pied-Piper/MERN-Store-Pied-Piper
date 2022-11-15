import { useEffect, useState, createContext } from "react";
import clienteAxios from "../../config/clienteAxios";

const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  return (
    <ProductosContext.Provider
      value={{
        productos,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export { ProductosProvider };
export default ProductosContext;
