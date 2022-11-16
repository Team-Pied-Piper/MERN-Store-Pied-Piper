import { Outlet, Navigate, Route, Routes } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { ListaProductosAdmin } from "../pages/listaProductosAdm/ListaProductosAdmin";
import { ListaVentasAdmin } from "../pages/listaVentasAdm/ListaVentasAdmin";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return "Cargando...";

  if (auth._id) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }

  // return <>{auth._id ? <Outlet /> : <Navigate to="/" />}</>;
};

export default RutaProtegida;
