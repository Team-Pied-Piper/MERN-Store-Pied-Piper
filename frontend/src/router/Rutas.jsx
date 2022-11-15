import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthLayout } from "../components/layout/AuthLayout";
import { ConfirmarCuenta } from "../components/pages/login/ConfirmarCuenta";
import { Login } from "../components/pages/login/Login";
import { NuevoPassword } from "../components/pages/login/NuevoPassword";
import { OlvidePassword } from "../components/pages/login/OlvidePassword";
import { Registrar } from "../components/pages/login/Registrar";
import { AuthProvider } from "../context/AuthProvider";
import { ProductosProvider } from "../context/ProductosProvaider";
import RutaProtegida from "../components/layout/RutaProtegida";
import { ListaProductos } from "../components/pages/listaProductos/ListaProductos";
import { ListaProductosAdmin } from "../components/pages/listaProductosAdm/ListaProductosAdmin";

const Rutas = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductosProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route
                path="olvide-password/:token"
                element={<NuevoPassword />}
              />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>

            <Route path="/tienda-pied-piper" element={<RutaProtegida />}>
              <Route index element={<ListaProductosAdmin />} />
            </Route>

            <Route path="/admin-tienda-pied-piper"></Route>
          </Routes>
        </ProductosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export { Rutas };
