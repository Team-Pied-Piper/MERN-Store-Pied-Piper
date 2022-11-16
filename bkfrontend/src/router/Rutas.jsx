import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { ConfirmarCuenta } from "../pages/login/ConfirmarCuenta";
import { Login } from "../pages/login/Login";
import { NuevoPassword } from "../pages/login/NuevoPassword";
import { OlvidePassword } from "../pages/login/OlvidePassword";
import { Registrar } from "../pages/login/Registrar";
import { AuthProvider } from "../context/AuthProvider";
import { ProductosProvider } from "../context/ProductosProvaider";

const Rutas = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductosProvider>
          <Routes>
            //RUTAS PUBLICAS - LOGIN
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
            //RUTAS PUBLICAS - LOGIN
          </Routes>
        </ProductosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export { Rutas };
