import {
  Outlet,
  Navigate,
  Route,
  Routes,
  useNavigate,
  Link,
} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Carrito } from "../pages/carrito/Carrito";
import { ListaProductos } from "../pages/listaProductos/ListaProductos";
import { ListaProductosAdmin } from "../pages/listaProductosAdm/ListaProductosAdmin";
import { ListaVentasAdmin } from "../pages/listaVentasAdm/ListaVentasAdmin";
import { Footer } from "./Footer";
import { HeaderNavAdmin } from "./HeaderNavAdmin";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  const navigate = useNavigate();

  if (cargando) return "Cargando...";

  if (auth._id) {
    if (auth.rol === "administrador") {
      return (
        <Routes>
          <Route path="lista-productos" element={<ListaProductosAdmin />} />
          <Route path="lista-ventas" element={<ListaVentasAdmin />} />
        </Routes>
      );
    } else {
      return <>desde cliente</>;
    }
  } else {
    return <Navigate to="/" />;
  }
};

export default RutaProtegida;
