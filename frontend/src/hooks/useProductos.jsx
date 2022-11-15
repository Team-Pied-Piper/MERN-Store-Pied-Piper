import { useContext } from "react";
import ProductosContext from "../context/ProductosProvaider";

const useProductos = () => {
  return useContext(ProductosContext);
};

export default useProductos;
