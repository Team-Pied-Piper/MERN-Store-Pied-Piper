import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthLayout } from "../components/layout/AuthLayout";
import { ConfirmarCuenta } from "../components/pages/login/ConfirmarCuenta";
import { Login } from "../components/pages/login/Login";
import { NuevoPassword } from "../components/pages/login/NuevoPassword";
import { OlvidePassword } from "../components/pages/login/OlvidePassword";
import { Registrar } from "../components/pages/login/Registrar";

const RutasPublicas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
          <Route path="olvide-password/:token" element={<NuevoPassword />} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { RutasPublicas };
